import React from 'react';

//ASSETS
import LOGO from '../../images/logo.png';

const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-gray-700 hover:bg-gray-600 py-4">
        <p className="text-center">Back to top</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800">
        <div className="flex justify-center py-12 border-b-2 border-gray-600">
          <div className="mx-16">
            <h5 className="font-bold text-lg">Get to know us</h5>
            <ul>
              <li className="my-1">
                <a href="">Careers</a>
              </li>
              <li className="my-1">
                <a href="">Blog</a>
              </li>
              <li className="my-1">
                <a href="">About Amazon</a>
              </li>
              <li className="my-1">
                <a href="">Investors Relations</a>
              </li>
              <li className="my-1">
                <a href="">Amazon Devices</a>
              </li>
            </ul>
          </div>
          <div className="mx-16">
            <h5 className="font-bold text-lg">Make money with us</h5>
            <ul>
              <li className="my-1">
                <a href="">Sell products on Amazon</a>
              </li>
              <li className="my-1">
                <a href="">Sell on Amazon Business</a>
              </li>
              <li className="my-1">
                <a href="">Sell apps on Amazon</a>
              </li>
              <li className="my-1">
                <a href="">Become an affiliate</a>
              </li>
              <li className="my-1">
                <a href="">Advertise your products</a>
              </li>
              <li className="my-1">
                <a href="">Self-publish with us</a>
              </li>
              <li className="my-1">
                <a href="">Host an Amazon Hub</a>
              </li>
              <li className="my-1">
                <a href="">See more make money with us</a>
              </li>
            </ul>
          </div>
          <div className="mx-16">
            <h5 className="font-bold text-lg">Amazon payment products</h5>
            <ul>
              <li className="my-1">
                <a href="">Amazon Business Card</a>
              </li>
              <li className="my-1">
                <a href="">Shop with points</a>
              </li>
              <li className="my-1">
                <a href="">Reload your balance</a>
              </li>
              <li className="my-1">
                <a href="">Amazon currency converter</a>
              </li>
            </ul>
          </div>
          <div className="mx-16">
            <h5 className="font-bold text-lg">Let us help you</h5>
            <ul>
              <li className="my-1">
                <a href="">Amazon and COVID-19</a>
              </li>
              <li className="my-1">
                <a href="">Your account</a>
              </li>
              <li className="my-1">
                <a href="">Your orders</a>
              </li>
              <li className="my-1">
                <a href="">Shipping rates & policies</a>
              </li>
              <li className="my-1">
                <a href="">Returns & replacements</a>
              </li>
              <li className="my-1">
                <a href="">Manage your content and devices</a>
              </li>
              <li className="my-1">
                <a href="">Amazon Assistant</a>
              </li>
              <li className="my-1">
                <a href="">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-12">
          <img className="w-16" src={LOGO} alt="" />
        </div>
      </div>
      <div className="bg-black py-4">
        <p className="flex items-center justify-center">
          &copy; 1996-2021, Amazon clone. Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          by <a className='underline ml-1' href="https://www.emlhd.com">emlhd.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
