//DEPENDENCIES
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';

//ASSETS
import LOGO from '../../images/logo.png';

const Header = () => {
  const { user, cart } = useContext(GlobalContext);

  return (
    <>
      <div className="px-6 py-2 bg-black text-white flex items-center justify-between">
        <Link to="/">
          <img className="w-12" src={LOGO} alt="Amazon logo" />
        </Link>
        <div className="flex items-center mx-4">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="ml-2">
            <span className="text-gray-300 text-xs">Deliver to</span>
            <h6 className="font-bold">Belgium</h6>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between mx-4">
          <div className="self-stretch">
            <select className="bg-gray-100 rounded-l-sm border-r-2 h-full text-gray-500 px-2">
              <option value="">All</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
          <input className="flex-1 p-2 text-black" type="text" />
          <div className="self-stretch">
            <Link to="/products">
              <button className="h-full bg-brand rounded-r-sm px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to={user ? '/profile' : '/login'}
            className="mx-2 p-2 border-2 border-black hover:border-white self-stretch"
          >
            <span>Hello, {user ? user.email : 'Sign in'}</span>
            <h6 className="font-bold">Account & Lists</h6>
          </Link>
          <Link
            to="/orders"
            className="mx-2 p-2 border-2 border-black hover:border-white self-stretch"
          >
            <span>Returns</span>
            <h6 className="font-bold">& Orders</h6>
          </Link>
          {user && (
            <Link
              to="/cart"
              className="flex items-center mx-2 p-2 border-2 border-black hover:border-white self-stretch"
            >
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h6 className="font-bold">Cart ({cart?.length})</h6>
            </Link>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between bg-darkGray text-white py-2 px-4">
        <div className="flex items-center">
          <a className="flex items-center mx-2" href="">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>All</span>
          </a>
          <a className="mx-2" href="">
            Today's deals
          </a>
          <a className="mx-2" href="">
            Customer service
          </a>
          <a className="mx-2" href="">
            Gift card
          </a>
          <a className="mx-2" href="">
            Registry
          </a>
          <a className="mx-2" href="">
            Sell
          </a>
        </div>
        <div>
          <h6 className="font-semibold">Amazon's response to COVID-19</h6>
        </div>
      </div>
    </>
  );
};

export default Header;
