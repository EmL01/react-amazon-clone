import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(GlobalContext);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        !user && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...rest} />
        )
      }
    />
  );
};

export default PrivateRoute;
