
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';
import ShowMessage from './ShowMessage';

function StepThree(props) {
  return (
    <div className="form-group">
      <input type="text" onChange={props.handleTextChange} />
      <button
        onClick={props.checkTextFromServer}
      >
      check
      </button>
      <br /><br />
      <ShowMessage message={props.state.error.checkFail || 'Please enter to check from server'} />
      { props.state.form.check ? <NextButton next={props.next} /> : null }
      <br />
    </div>
  );
}

StepThree.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  checkTextFromServer: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  state: PropTypes.shape({ form: {}, error: {} }).isRequired,
};

export default StepThree;
