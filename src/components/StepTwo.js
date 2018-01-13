
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

function StepTwo(props) {
  return (
    <div className="form-group">
      <button
        className={props.state.b === 'B1' ? 'active' : null}
        value="B1"
        onClick={props.handleActivButtons}
      >B1
      </button>
      <br />
      <button
        className={props.state.b === 'B2' ? 'active' : null}
        value="B2"
        onClick={props.handleActivButtons}
      >B2
      </button>
      <br /><br />
      { props.state.b ? <NextButton next={props.next} /> : null }
    </div>
  );
}

StepTwo.propTypes = {
  handleActivButtons: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  state: PropTypes.shape({ b: null }).isRequired,
};

export default StepTwo;
