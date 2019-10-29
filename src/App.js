import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import * as authActions from 'store/actions/auth';
import * as authSelectors from 'selectors/auth';

import Signin from 'containers/Signin/Signin';
import Signout from 'containers/Signout/Signout';

import Home from 'components/Home/Home';
import Navigation from 'components/Navigation/Navigation';
import NotFound from 'components/NotFound/NotFound';

import './App.css';

const defaultRoutes = [
  {
    path: '/signin',
    component: Signin,
    name: 'Sign in'
  },
  {
    path: '/signup',
    component: null,
    name: 'Sign up'
  }
];

const authenticatedRoutes = [
  {
    path: '/signout',
    component: Signout,
    name: 'Sign out'
  }
];

const App = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector(authSelectors.selectAuthSignedIn);
  const [routes, setRoutes] = useState(defaultRoutes);

  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    signedIn
      ? setRoutes([...authenticatedRoutes])
      : setRoutes([...defaultRoutes]);
  }, [signedIn]);

  return (
    <div className="App container">
      <Navigation routes={routes} />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          {routes.map(route => (
            <Route
              path={route.path}
              exact
              component={route.component}
              key={route.name}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
