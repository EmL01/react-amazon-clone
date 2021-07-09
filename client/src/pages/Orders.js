import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Orders = () => {
  const {
    user: { orders },
  } = useContext(GlobalContext);

  return (
    <div className="bg-white py-8 px-4 my-8 mx-12">
      <h1 className="text-xl underline">Your orders</h1>
      <p>{orders?.length} orders</p>
      {orders.map((order) => (
        <div className="border-2 rounded-xl border-gray-300 my-4">
          <div className="bg-gray-200 flex justify-between p-4 py-8 rounded-t-xl">
            <div className="flex flex-col">
              <h5 className="text-gray-900 uppercase">Order placed</h5>
              <p className="text-gray-500">
                {new Date(order.date).toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col text-center">
              <h5 className="text-gray-900 uppercase">Total</h5>
              <p className="text-gray-500">${order.amount}</p>
            </div>
            <div className="flex flex-col text-right">
              <h5 className="text-gray-900 uppercase">Status</h5>
              <p className="text-gray-500">{order.status}</p>
            </div>
          </div>
          <div className="flex overflow-auto p-8">
            {JSON.parse(order.images).map((image) => (
              <img className="w-32" src={image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
