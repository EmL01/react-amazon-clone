require('dotenv').config();
const express = require('express'),
  app = express(),
  cors = require('cors'),
  fs = require('fs'),
  path = require('path'),
  https = require('https'),
  admin = require('firebase-admin'),
  PORT = process.env.PORT || 4000,
  STRIPE_SK = process.env.STRIPE_SK,
  stripe = require('stripe')(STRIPE_SK);

app.use(cors());
app.use((req, res, next) => {
  if (req.originalUrl === '/api/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});
app.use(express.urlencoded({ extended: false }));

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/api/create-checkout-session', async (req, res) => {
  const { id, items, email } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map((item) => ({
      description: item.description,
      quantity: 1,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.image],
        },
      },
    })),
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    success_url: 'https://safe-cliffs-28619.herokuapp.com/success',
    cancel_url: 'https://safe-cliffs-28619.herokuapp.com/cart',
    metadata: {
      id,
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  return res.json({ id: session.id });
});

//Firebase admin setup
const firebase = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
      }),
    })
  : admin.app();

const endpointSecret = process.env.STRIPE_LOGIN_SECRET;
app.post(
  '/api/webhook',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    let event = req.body;
    if (endpointSecret) {
      const signature = req.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return res.sendStatus(400);
      }
    }
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const { id, images } = session.metadata;
        firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            orders: admin.firestore.FieldValue.arrayUnion({
              images,
              amount: session.amount_total / 100,
              amount_shipping: session.total_details.amount_shipping / 100,
              status: session.payment_status,
              pi: session.payment_intent,
              date: Date.now(),
            }),
          });
        break;
      default:
        console.log(`Unhandled event type ${event.type}.`);
    }
    res.send();
  }
);

if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
} else {
  const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'selfsigned.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'selfsigned.key')),
  };

  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
