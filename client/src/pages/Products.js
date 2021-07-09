import React, { useContext } from 'react';

//COMPONENTS
import ProductItem from '../components/products/ProductItem';
import GlobalContext from '../context/GlobalContext';

const Products = () => {
  const { products } = useContext(GlobalContext)

  return (
    <div className='m-8'>
      <div className="py-2 border-b-2 border-gray-400 my-4">
        <span className='text-xl'>{products.length} available product{products.length > 1 && 's'}</span>
      </div>
      <div>
        {/* Left panel */}
        <div></div>
        {/* Right panel */}
        <div>
          {/* Product */}
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
          <div className="flex items-center justify-center my-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-gray-300 p-2 px-4 mx-2">1</button>
            <button className="bg-gray-300 p-2 px-4 mx-2">2</button>
            <button className="bg-gray-300 p-2 px-4 mx-2">3</button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
