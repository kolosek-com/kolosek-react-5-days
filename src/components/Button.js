import React from 'react';

const Button = ({className, isDisabled, imgSrc, onClick}) => (
  <button 
    className={className} 
    disabled={isDisabled} 
    onClick={onClick}
  >
    <img src={imgSrc} width="30" height="30" />
  </button>
);

export default Button;
