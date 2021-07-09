//DEPENDENCIES
import React from 'react';

//ASSETS
import SHOWCASE from '../images/showcase.jpg';
import COMPUTERS from '../images/computers_accessories.jpg';
import AMAZONBASICS from '../images/amazonbasics.jpg';
import OCULUS from '../images/oculus.jpg';
import FITATHOME from '../images/fit_at_home.jpg';
import IDEALTV from '../images/ideal_tv.jpg';
import CATEGORY_1 from '../images/category_1.jpg';
import CATEGORY_2 from '../images/category_2.jpg';
import CATEGORY_3 from '../images/category_3.jpg';
import CATEGORY_4 from '../images/category_4.jpg';
import CATEGORY_5 from '../images/category_5.jpg';
import CATEGORY_6 from '../images/category_6.jpg';
import CATEGORY_7 from '../images/category_7.jpg';
import CATEGORY_8 from '../images/category_8.jpg';

const Home = () => {
  return (
    <div className="">
      <img className="home__showcase w-full" src={SHOWCASE} alt="" />
      <div className="-mt-80 grid grid-cols-4 gap-6 my-4 mx-6">
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Computers & Accessories</h5>
          <img className="my-4 flex-1 object-cover" src={COMPUTERS} alt="" />
          <a className="text-xs" href="">
            Shop now
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">AmazonBasics</h5>
          <img className="my-4 flex-1 object-cover" src={AMAZONBASICS} alt="" />
          <a className="text-xs" href="">
            See more
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Shop by Category</h5>
          <div className="grid grid-cols-2 gap-2 flex-1 my-4">
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_1} alt="" />
              <h6 className="text-xs text-center mt-2">
                Computers & Accessories
              </h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_2} alt="" />
              <h6 className="text-xs text-center mt-2">Video Games</h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_3} alt="" />
              <h6 className="text-xs text-center mt-2">Baby</h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_4} alt="" />
              <h6 className="text-xs text-center mt-2">Toys & Games</h6>
            </div>
          </div>
          <a className="text-xs" href="">
            See more
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8 self-start">
          <h5 className="font-semibold text-lg">
            Sign in for the best experience
          </h5>
          <a className="bg-brand text-center py-2 px-4 mt-4 rounded-sm" href="">
            Sign in securely
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Oculus</h5>
          <img className="my-4 flex-1 object-cover" src={OCULUS} alt="" />
          <a className="text-xs" href="">
            Shop now
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Git fit at home</h5>
          <img className="my-4 flex-1 object-cover" src={FITATHOME} alt="" />
          <a className="text-xs" href="">
            Explore now
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Gaming accessories</h5>
          <div className="grid grid-cols-2 gap-2 flex-1 my-4">
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_5} alt="" />
              <h6 className="text-xs text-center mt-2">Headsets</h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_6} alt="" />
              <h6 className="text-xs text-center mt-2">Keyboards</h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_7} alt="" />
              <h6 className="text-xs text-center mt-2">Computer mice</h6>
            </div>
            <div className="flex flex-col items-center p-4 bg-lightBlue">
              <img src={CATEGORY_8} alt="" />
              <h6 className="text-xs text-center mt-2">Chairs</h6>
            </div>
          </div>
          <a className="text-xs" href="">
            See more
          </a>
        </div>
        <div className="flex flex-col z-10 bg-white px-6 py-8">
          <h5 className="font-semibold text-lg">Find your ideal TV</h5>
          <img className="my-4 flex-1 object-cover" src={IDEALTV} alt="" />
          <a className="text-xs" href="">
            See more
          </a>
        </div>
      </div>
      <div className="bg-white mx-6 p-6 my-4">
        <div className="flex items-center">
          <h5 className="text-xl">Top Beauty & Personal Care products</h5>
          <a className="text-xs ml-4" href="">
            Shop now
          </a>
        </div>
        <div className='flex justify-evenly overflow-x-auto mt-4'>
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
          <img className='w-48 m-2' src={AMAZONBASICS} alt="" />
        </div>
      </div>
      <div className="bg-white mx-6 p-6 my-4">
        <div className="flex items-center">
          <h5 className="text-xl">Our favorite Toys</h5>
          <a className="text-xs ml-4" href="">
            Shop now
          </a>
        </div>
        <div className='flex justify-evenly overflow-x-auto mt-4'>
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
          <img className='w-48 m-2' src={IDEALTV} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
