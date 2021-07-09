//DEPENDENCIES
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { db, auth } from './firebase';
import GlobalContext from './context/GlobalContext';

//COMPONENTS
import PrivateRoute from './components/routing/PrivateRoute';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Success from './pages/Success';
import Orders from './pages/Orders';

function App() {
  const { loading, setUser, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const currentUser = await db.collection('users').doc(user.uid).get();
        const userData = currentUser.data();
        setUser({ id: user.uid, ...userData });
      } else {
        setUser(null);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-2xl font-bold">Loading data...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <div className="max-w-screen-2xl mx-auto leading-none">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/products" exact component={Products} />
          <PrivateRoute path="/cart" exact component={Cart} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/success" exact component={Success} />
          <PrivateRoute path="/orders" exact component={Orders} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
