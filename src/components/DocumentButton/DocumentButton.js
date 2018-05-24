import React from 'react';
import PropTypes from 'prop-types';

import './DocumentButton.css';

function DocumentButton({ className, disabled, onClick }) {
  return (
    <button className={className} disabled={disabled} onClick={onClick} />
  );
}

DocumentButton.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DocumentButton;
