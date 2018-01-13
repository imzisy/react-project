import { submitIt } from '../utils/api-request';

const form = (state = { check: null, submit: null }, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return submitIt(action.payload)
        .then({
          return: {
            ...state,
            submit: 'success',
          },
        })
        .catch((error) => {
          action.asyncDispatch({ type: 'SUBMIT_FAIL', payload: error });
        });
    case 'CHECK_SUCCESS':
      return {
        ...state,
        check: 'success',
      };
    default:
      return state;
  }
};

export default form;
