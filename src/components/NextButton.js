
import React from 'react';
import PropTypes from 'prop-types';

function NextButton(props) {
  return (
    <div>
      <button className="btn btn-default" onClick={props.next}>Next</button>
    </div>
  );
}

NextButton.propTypes = {
  next: PropTypes.func.isRequired,
};

export default NextButton;
