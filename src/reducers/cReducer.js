const c = (state = null, action) => {
  switch (action.type) {
    case 'SET_C':
      return action.payload;
    default:
      return state;
  }
};

export default c;
