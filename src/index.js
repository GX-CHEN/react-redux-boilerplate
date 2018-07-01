import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';

import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.css';
import './index.css';

/**
 * this page is the top level of React
 * Redux store, browser history support, and bind generated JS handling to DOM are handled here
 */

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
