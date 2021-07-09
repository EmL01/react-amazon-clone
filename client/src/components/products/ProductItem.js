//DEPENDENCIES
import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const ProductItem = ({ product, removeButton }) => {
  const { addProduct, removeProduct } = useContext(GlobalContext);
  const { id, title, description, price, rating, stock, image } = product;

  const stars = [1, 2, 3, 4, 5];

  const addToCart = () => {
    addProduct(product);
  };

  const removeFromCart = () => {
    removeProduct(id);
  };

  return (
    <div className="flex p-4 bg-white shadow-sm my-2">
      <img className="w-64 object-cover" src={image} alt="" />
      <div className="flex flex-col items-start flex-1 mx-4">
        <h1 className="font-medium text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
        <div className="flex my-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-brand"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
        </div>
        <p className="text-lg font-semibold">${price}</p>
        <p className="text-sm mt-2">Ships to Belgium</p>
        {stock <= 5 ? (
          <p className="text-sm text-red-500">
            Only {stock} left in stock - order soon.
          </p>
        ) : (
          <p className="text-sm text-green-500">In stock.</p>
        )}
        {!removeButton ? (
          <button
            onClick={addToCart}
            className="flex items-center bg-brand py-2 px-4 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p>Add to basket</p>
          </button>
        ) : (
          <button
            className="flex items-center bg-brand py-2 px-4 mt-4"
            onClick={removeFromCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <p>Remove from basket</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
