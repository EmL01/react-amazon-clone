import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const { setUser } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      if (res) {
        setUser(res.user);
        history.push('/');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-lg my-8 mx-auto">
      <div className="flex flex-col p-8 border-2 border-gray-300">
        <h1 className="text-3xl">Sign-In</h1>
        <form action="" className="my-4" onSubmit={login}>
          <div className="mb-4">
            <label className="font-bold" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full p-2 mt-1 rounded-sm text-black"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mt-1 rounded-sm text-black"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand py-2 mt-2 rounded-sm"
          >
            Log in
          </button>
        </form>
        <p className="mt-2 text-xs">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <a className="mt-4" href="">
          Need help?
        </a>
      </div>
      <div className="flex flex-col items-center my-4">
        <p className="text-sm mb-2">New to Amazon?</p>
        <Link
          to="/register"
          className="w-full bg-gray-300 py-2 border-2 border-gray-400 rounded-sm text-center"
        >
          Create your Amazon account
        </Link>
      </div>
    </div>
  );
};

export default Login;
