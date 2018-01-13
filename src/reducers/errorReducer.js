const error = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_FAIL':
      return {
        ...state,
        submitFail: action.payload,
      };
    case 'CHECK_FAIL':
      return {
        ...state,
        checkFail: String(action.payload),
      };
    case 'CHECK_SUCCESS':
      return {
        checkFail: null,
      };
    case 'SUBMIT_SUCCESS':
      return {
        submitFail: null,
      };
    default:
      return state;
  }
};

export default error;
