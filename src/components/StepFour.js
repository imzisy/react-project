
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

function StepFour(props) {
  return (
    <div>
      <select defaultValue="" onChange={props.handleSelectedBox}>
        <option value="" disabled />
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="C3">C3</option>
      </select>
      <br /> <br />
      { props.state.c ? <NextButton next={props.next} /> : null }
    </div>
  );
}

StepFour.propTypes = {
  handleSelectedBox: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  state: PropTypes.shape({ c: null }).isRequired,
};
export default StepFour;
