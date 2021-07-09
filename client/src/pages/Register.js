import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { db, auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (res) {
        const { uid, email, password } = res.user;
        console.log(res.user);
        db.collection('users').doc(uid).set({
          name,
          email,
        });
        history.push('/');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-lg my-8 mx-auto">
      <div className="flex flex-col p-8 border-2 border-gray-300">
        <h1 className="text-3xl">Create a new account</h1>
        <form className="my-4" onSubmit={register}>
          <div className="mb-4">
            <label className="font-bold" htmlFor="full">
              Full name
            </label>
            <input
              className="w-full p-2 mt-1 rounded-sm text-black"
              onChange={(e) => setName(e.target.value)}
              name="full"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold" htmlFor="email">
              Email address
            </label>
            <input
              className="w-full p-2 mt-1 rounded-sm text-black"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
            />
          </div>
          <div className="mb-2">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mt-1 rounded-sm text-black"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand py-2 mt-2 rounded-sm"
          >
            Create my account
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
        <p className="text-sm mb-2">Already have an account?</p>
        <Link
          to="/login"
          className="w-full bg-gray-300 py-2 border-2 border-gray-400 rounded-sm text-center"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Login;
