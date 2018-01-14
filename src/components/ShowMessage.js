
import React from 'react';
import PropTypes from 'prop-types';

function ShowMessage(props) {
  return <div>{ props.message}</div>;
}

ShowMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ShowMessage;
