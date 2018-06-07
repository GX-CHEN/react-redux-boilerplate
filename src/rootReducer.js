import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wikiImage from './reducer/wikiImage';

export default combineReducers({
  router: routerReducer,
  wikiImage
});
