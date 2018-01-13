
import React from 'react';
import PropTypes from 'prop-types';

function ShowError(props) {
  return <div>{ props.message}</div>;
}

ShowError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ShowError;
