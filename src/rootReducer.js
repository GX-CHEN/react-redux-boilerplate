import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import image from './reducer/image';

export default combineReducers({
  router: routerReducer,
  image
});
