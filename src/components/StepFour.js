
import React from 'react';
import PropTypes from 'prop-types';

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
      <button className="btn btn-default" onClick={props.next}>Next</button>
    </div>
  );
}

StepFour.propTypes = {
  handleSelectedBox: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
export default StepFour;
