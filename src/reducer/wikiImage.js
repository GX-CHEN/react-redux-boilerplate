import { SEARCH_IMAGES_BY_PAGE_FULFILLED } from '../const/wikiImage';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_IMAGES_BY_PAGE_FULFILLED: {
      return {
        ...state,
        imageList: payload.query.pages[736].images,
        nextPage: 'viewImage'
      };
    }
    default:
      return state;
  }
};
