import React, { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import * as ROUTES from 'constants/routes';

import * as authActions from 'store/actions/auth';

import * as authSelectors from 'selectors/auth';

import Home from 'components/Home/Home';
import Navigation from 'components/Navigation/Navigation';
import NotFound from 'components/NotFound/NotFound';

import './App.css';

const App: FC = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector(authSelectors.selectAuthSignedIn);
  const [routes, setRoutes] = useState(ROUTES.defaultRoutes);

  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    signedIn
      ? setRoutes([...ROUTES.authenticatedRoutes])
      : setRoutes([...ROUTES.defaultRoutes]);
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
              component={route.component}
              key={route.name}
              exact
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
