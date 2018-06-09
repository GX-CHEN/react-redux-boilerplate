import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
/**
 * middleware will empower the app to do complex things with less code
 * For example: async handling, routing, cookie handling etc,
 * In the store.js, we specify all the middlewares in the store creation process 
 */
const middleware = [thunk, routerMiddleware(history), promiseMiddleware()];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(rootReducer, initialState, composedEnhancers);
