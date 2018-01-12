import React from 'react';
import {combineReducers, createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';

import App from "./containers/App";

import a from "./reducers/aReducer";
import b from "./reducers/bReducer";
import c from "./reducers/cReducer";
import text from "./reducers/textReducer";
import error from "./reducers/errorReducer";
import form from "./reducers/formReducer";
import registerServiceWorker from './registerServiceWorker';

 
const props = {
    a: [],
    b: null,
    text: null,
    c: null,
    error : {}
};
const rootReducer = combineReducers({
    a,
    b,
    c,  
    text,
    error,
    form
});

const asyncDispatchMiddleware = store => next => action => {
    let syncActivityFinished = false;
    let actionQueue = [];
  
    function flushQueue() {
      actionQueue.forEach(a => store.dispatch(a)); // flush queue
      actionQueue = [];
    }
  
    function asyncDispatch(asyncAction) {
      actionQueue = actionQueue.concat([asyncAction]);
  
      if (syncActivityFinished) {
        flushQueue();
      }
    }
  
    const actionWithAsyncDispatch =
        Object.assign({}, action, { asyncDispatch });
  
    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
};   
  
let store = createStore(
    rootReducer,  
    props,
    applyMiddleware(asyncDispatchMiddleware)
  );
  
ReactDOM.render(<Provider store={store}><App/></Provider>
    , document.getElementById('root'));
registerServiceWorker();