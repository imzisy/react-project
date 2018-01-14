export function addA(value) {
  return {
    type: 'ADD_A',
    payload: value,
  };
}

export function setB(value) {
  return {
    type: 'SET_B',
    payload: value,
  };
}

export function setC(value) {
  return {
    type: 'SET_C',
    payload: value,
  };
}

export function setText(value) {
  return {
    type: 'SET_TEXT',
    payload: value,
  };
}

export function checkText() {
  return {
    type: 'CHECK_TEXT',
  };
}

export function submit(values) {
  return {
    type: 'SUBMIT',
    payload: values,
  };
}
