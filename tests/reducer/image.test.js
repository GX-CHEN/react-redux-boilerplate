import reducers from '../../src/reducer/image';
import { GET_TRENDING_IMAGE_FULFILLED, SEARCH_IMAGE_FULFILLED } from '../../src/const/image';

describe('image reducer test', () => {
  it('reducers if action "GET_TRENDING_IMAGE_FULFILLED"', () => {
    let state;
    state = reducers(
      {
        startupData: {}
      },
      {
        type: GET_TRENDING_IMAGE_FULFILLED,
        payload: {
          data: []
        }
      }
    );
    expect(state).toEqual({ imageList: [], nextPage: 'viewImage', startupData: {} });
  });

  it('reducers if action "SEARCH_IMAGE_FULFILLED"', () => {
    let state;
    state = reducers(
      {
        startupData: {}
      },
      {
        type: SEARCH_IMAGE_FULFILLED,
        payload: {
          data: []
        }
      }
    );
    expect(state).toEqual({ imageList: [], nextPage: 'viewImage', startupData: {} });
  });
});
