import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import { db } from '../firebase';

const Success = () => {
  const { user, setUser } = useContext(GlobalContext);

  useEffect(() => {
    db.collection('users')
      .doc(user?.id)
      .onSnapshot(async (snapshot) => {
        const userData = snapshot.data();
        setUser({ id: user.id, ...userData });
      });
  }, []);
  
  return (
    <div>
      <div className="p-8 my-8 bg-white text-center">
        <div className="">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-xl font-bold">
              Thank you! Your order has successfully been completed
            </h1>
          </div>
          <p>
            We successfully received your order. We are working on it and we
            will ship it as soon as possible. An email will be sent to your
            email address to confirm your order.
          </p>
        </div>
        <Link to="/orders">
          <button className="bg-brand mt-4 px-8 py-4">Go to my orders</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
