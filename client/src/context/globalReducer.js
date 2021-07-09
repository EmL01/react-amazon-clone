import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCTS,
  SET_USER,
  UPDATE_ORDERS
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload?.map(doc => { return { id: doc.id, ...doc.data() } })
      }
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item, i) => i !== state.cart.findIndex((item) => item.id === action.payload))
      };
    }
    case UPDATE_ORDERS: {
      return {
        ...state,
        user: { ...state.user, orders: action.payload }
      }
    }
    default:
      return state;
  }
};
