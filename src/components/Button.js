import React from 'react';

const Button = ({className, isDisabled, imgSrc, onClick, imgClass}) => (
  <button 
    className={className} 
    disabled={isDisabled} 
    onClick={onClick}
  >
    <img src={imgSrc} className={imgClass} />
  </button>
);

export default Button;
