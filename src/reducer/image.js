import { SEARCH_IMAGES_BY_PAGE_FULFILLED } from '../const/image';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  /**
   * Becuse we use PromiseMiddleware, each action will have three possible phase
   * FULFILLED, PENDING, REJECTED
   * Now we only care about the FULFILLED case (handle successfully returned result)
   * PENDING will be useful to display a loading screen
   * REJECTED can be used for handling errors
   */
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
