import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import image from './reducer/image';

/**
 * rootReducer is a combination of reducers
 * Notice though Redux use a single store, but we can group different type of data by put them in different action, reducer
 * Now it's the simplest case: routerReducer is from react-router-redux package (used for route handling),
 * and we only have 1 customized reducer "image"
 */
export default combineReducers({
  router: routerReducer,
  image,
});
