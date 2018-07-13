import { SEARCH_IMAGES_BY_PAGE } from '../const/image';
import { getTrendingImageService } from '../model/apiService';

export const getTrendingImage = () => {
  return dispatch => {
    return dispatch({
      type: SEARCH_IMAGES_BY_PAGE,
      payload: getTrendingImageService()
    });
  };
};
