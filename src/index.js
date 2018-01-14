/* eslint-env browser */

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'),
);
registerServiceWorker();

