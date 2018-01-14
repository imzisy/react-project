import { submitIt } from '../utils/api-request';

const form = (state = { check: null, submit: null }, action) => {
  switch (action.type) {
    case 'SUBMIT':
      submitIt(action.payload)
        .then({
          return: {
            ...state,
            submit: 'success',
          },
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
    default:
      return state;
  }
};

export default form;
