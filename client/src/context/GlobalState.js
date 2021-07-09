import React, { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import userReducer from './globalReducer';
import {
  SET_USER,
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ORDERS,
} from './types';
import { db } from '../firebase';

const GlobalState = (props) => {
  const initialState = {
    user: null,
    products: [],
    cart: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      dispatch({ type: SET_PRODUCTS, payload: snapshot.docs });
    });
  };

  const addProduct = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const updateOrders = (orders) => {
    dispatch({ type: UPDATE_ORDERS, payload: orders });
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        products: state.products,
        cart: state.cart,
        loading: state.loading,
        setUser,
        getProducts,
        addProduct,
        removeProduct,
        updateOrders,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
