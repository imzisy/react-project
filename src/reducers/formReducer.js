import { submitIt } from '../utils/api-request';
import store from '../store/store';

const form = (state = { check: null, submit: null }, action) => {
  switch (action.type) {
    case 'SUBMIT':
      submitIt(store.getState())
        .then((response) => {
          action.asyncDispatch({ type: 'SUBMIT_SUCCESS', payload: response });
        })
        .catch((error) => {
          action.asyncDispatch({ type: 'SUBMIT_FAIL', payload: error });
        });
      return state;
    case 'CHECK_SUCCESS':
      return {
        ...state,
        check: 'success',
      };
    case 'CHECK_FAIL':
      return {
        ...state,
        check: null,
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        submit: 'success',
      };
    default:
      return state;
  }
};

export default form;
