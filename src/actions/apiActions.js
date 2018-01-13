export function checkFail(value) {
  return {
    type: 'CHECK_FAIL',
    payload: value,
  };
}

export function submitFail(value) {
  return {
    type: 'SUBMIT_FAIL',
    payload: value,
  };
}
