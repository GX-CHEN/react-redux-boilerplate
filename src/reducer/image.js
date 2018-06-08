import { SEARCH_IMAGES_BY_PAGE_FULFILLED } from '../const/image';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_IMAGES_BY_PAGE_FULFILLED: {
      return {
        ...state,
        imageList: payload.data,
        nextPage: 'viewImage'
      };
    }
    default:
      return state;
  }
};
