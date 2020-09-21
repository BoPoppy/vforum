import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const data = localStorage.getItem('userId');

  return (
    <Route
      {...rest}
      render={(props) =>
        data ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
