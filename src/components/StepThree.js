
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';
import ShowError from './ShowError';

function StepThree(props) {
  return (
    <div className="form-group">
      <input type="text" onChange={props.handleTextChange} />
      <button
        onClick={props.checkTextFromServer}
      />
        check
      <br /><br />
      <ShowError message={props.state.error.checkFail} />
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
