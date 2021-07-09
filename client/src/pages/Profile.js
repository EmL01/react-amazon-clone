import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { auth } from '../firebase';

const Profile = () => {
    const { user, cart } = useContext(GlobalContext);

    const logout = () => {
        auth.signOut();
    }

    return (
      <div className="p-8">
        <h1>
          Your email address: <span className="font-bold">{user?.email}</span>
        </h1>
        <h1>
          Your currently have <span className="font-bold">{cart?.length}</span>{' '}
          items in your cart
        </h1>
        <button className="bg-brand py-2 px-4 mt-2" onClick={logout}>
          Log out
        </button>
      </div>
    );
}

export default Profile