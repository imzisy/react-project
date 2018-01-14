
import React from 'react';
import PropTypes from 'prop-types';

function ShowMessage(props) {
  return <div className="flash">{ props.message}</div>;
}

ShowMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ShowMessage;
