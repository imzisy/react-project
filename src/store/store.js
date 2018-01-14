import { combineReducers, createStore, applyMiddleware } from 'redux';
import a from '../reducers/aReducer';
import b from '../reducers/bReducer';
import c from '../reducers/cReducer';
import text from '../reducers/textReducer';
import error from '../reducers/errorReducer';
import form from '../reducers/formReducer';

const rootReducer = combineReducers({
  a,
  b,
  c,
  text,
  error,
  form,
});
const props = {
  a: [],
  b: null,
  text: null,
  c: null,
  error: {},
};

const asyncDispatchMiddleware = store => next => (action) => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(_action => store.dispatch(_action)); // flush queue
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

const store = createStore(
  rootReducer,
  props,
  applyMiddleware(asyncDispatchMiddleware),
);

export default store;
