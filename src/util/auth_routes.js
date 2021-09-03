import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Private = ({component: Component, isAuthenticated, path, exact}) => {
  return (<Route  
    path={path}
    exact={exact}
    render={props => 
      isAuthenticated ? <Component {...props} /> : <Redirect to='/' /> }
  />)
}

const Protected = ({component: Component, isAuthenticated, path, exact}) => {
  return (<Route  
    path={path}
    exact={exact}
    render={props => {
      return !isAuthenticated ? <Component {...props} /> : <Redirect to='/home' /> }
    }
  />)
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.session.isAuthenticated };
};

export const PrivateRoute =  withRouter(connect(mapStateToProps)(Private));
export const ProtectedRoute =  withRouter(connect(mapStateToProps)(Protected));