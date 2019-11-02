import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import sagas from 'store/sagas';
import reducers from 'store/reducers';

export const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);

  const enhancer = composeWithDevTools(
    applyMiddleware(routeMiddleware, sagaMiddleware)
  );

  const store = createStore(reducers(history), enhancer);

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
