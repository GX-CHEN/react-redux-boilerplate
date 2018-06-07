import { SEARCH_IMAGES_BY_PAGE } from '../const/wikiImage';
import { searchImageService } from '../model/apiService';

export const searchImage = () => {
  return dispatch => {
    return dispatch({
      type: SEARCH_IMAGES_BY_PAGE,
      payload: searchImageService()
    });
  };
};
