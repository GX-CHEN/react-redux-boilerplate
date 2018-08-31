import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import applicationReducer from '../../src/rootReducer';
import { getTrendingImage, searchImage } from '../../src/action/image';
import { GET_TRENDING_IMAGE_FULFILLED, SEARCH_IMAGE_FULFILLED } from '../../src/const/image';

let middleware = [thunk, promiseMiddleware()];
let glob = typeof window !== "undefined" ? window : global;
const devToolsExtension = glob.devToolsExtension;

let store;
let mock = new MockAdapter(axios);

const initialArrange = () => {
  jest.resetAllMocks();
  mock.reset();
  store = createStore(applicationReducer, compose(applyMiddleware(...middleware), devToolsExtension ? devToolsExtension() : f => f));
};

const mockedList = {
  imageList: [],
};

describe('action tests for images', () => {
  beforeEach(initialArrange);

  it('test getTrending FULFILLED action with middleware', async () => {
    mock.onGet().replyOnce(200, mockedList);
    const result = await store.dispatch(getTrendingImage());
    expect(result.action.type).toEqual(GET_TRENDING_IMAGE_FULFILLED);
    expect(result.action.payload).toEqual(mockedList);
  });

  it('test searchImage FULFILLED action with middleware', async () => {
    mock.onGet().replyOnce(200, mockedList);
    const result = await store.dispatch(searchImage());
    expect(result.action.type).toEqual(SEARCH_IMAGE_FULFILLED);
    expect(result.action.payload).toEqual(mockedList);
  });

});
