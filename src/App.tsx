import React, { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { authenticatedRoutes, defaultRoutes } from 'constants/routes';

import { checkAuth } from 'store/actions/auth';

import { selectAuthSignedIn } from 'selectors/auth';

import NoteList from 'containers/Note/List';

import Home from 'components/Home/Home';
import Navigation from 'components/Navigation/Navigation';
import NotFound from 'components/NotFound/NotFound';

import './App.css';

const App: FC = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector(selectAuthSignedIn);
  const [routes, setRoutes] = useState(defaultRoutes);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    setRoutes(signedIn ? authenticatedRoutes : defaultRoutes);
  }, [signedIn]);

  return (
    <div className="App container">
      <Navigation routes={routes} />
      <Container>
        <Switch>
          <Route path="/" exact component={signedIn ? NoteList : Home} />
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
