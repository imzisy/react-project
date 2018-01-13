
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

function StepOne(props) {
  return (
    <div className="form-group">
      <input type="checkbox" onClick={props.handleCheckedValues} value="A1" /> A1<br />
      <input type="checkbox" onClick={props.handleCheckedValues} value="A2" /> A2
      <br /><br />
      { props.state.a.length > 0 ? <NextButton next={props.next} /> : null }
    </div>
  );
}

StepOne.propTypes = {
  handleCheckedValues: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  state: PropTypes.shape({ a: [] }).isRequired,
};

export default StepOne;
