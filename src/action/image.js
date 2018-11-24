import { GET_TRENDING_IMAGE, SEARCH_IMAGE } from '../const/image';
import { getTrendingImageService, searchImageService } from '../model/apiService';

export const getTrendingImage = () => dispatch => {
  return dispatch({
    type: GET_TRENDING_IMAGE,
    payload: getTrendingImageService(),
  });
};

export const searchImage = keyword => dispatch => {
  return dispatch({
    type: SEARCH_IMAGE,
    payload: searchImageService(keyword),
  });
};
