import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const CircleCiRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    sessionStorage.getItem('circleCiToken') ? <Component {...props} /> : <Redirect to='/auth' />
  )} />
);

export default CircleCiRoute;