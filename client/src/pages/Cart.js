import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

import ProductItem from '../components/products/ProductItem';
import GlobalContext from '../context/GlobalContext';
import { db } from '../firebase';

const Cart = () => {
  const { user, cart } = useContext(GlobalContext);

  const sum = cart.reduce((a, b) => a + (b['price'] || 0), 0).toFixed(2);

  const createCheckoutSession = async () => {
    try {
      const stripe = await loadStripe(
        'pk_test_51J9pJCCManif76yuQTCkg86xB613ohuwwdp6aEpja15CfUS0d4KHKUvHThlqD9p53I9WYvrpygLPjOFyXiawQxjQ00aOlmtkNf'
      );

      const res = await axios.post(
        'https://safe-cliffs-28619.herokuapp.com/api/create-checkout-session',
        {
          id: user?.id,
          items: cart,
          email: user.email,
        }
      );

      await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="m-8">
      <div className="flex justify-between">
        {/** Left */}
        <div className="flex-1 p-8 mr-4 bg-white">
          <h1 className="text-2xl w-full border-b-2 border-gray-400">
            Your cart ({cart.length} items)
          </h1>
          {cart.length > 0 ? (
            <div className="mt-4">
              {cart.map((product) => (
                <ProductItem key={product.id} product={product} removeButton />
              ))}
            </div>
          ) : (
            <p className="text-center mt-8 text-xl">Your cart is empty...</p>
          )}
        </div>
        {/** Right */}
        <div className="bg-white border-2 border-gray-400 p-10 self-start">
          <h1 className="text-xl mb-2">
            Subtotal ({cart.length} items):{' '}
            <span className="font-bold">${sum}</span>
          </h1>
          <div className="flex items-center mb-2">
            <input type="checkbox" name="gift" />
            <label className="text-sm ml-1" htmlFor="gift">
              This order contains a gift
            </label>
          </div>
          <button
            role="link"
            onClick={createCheckoutSession}
            disabled={cart.length <= 0}
            className="py-2 px-4 w-full bg-brand rounded-sm mt-4"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
