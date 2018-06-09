import { Route } from 'react-router-dom';
import React from 'react';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

//EXAMPLE: <PropsRoute path='/login' component={Login} auth={auth} />
//^ would pass the auth prop to the Login component.
export const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}