import React from 'react';
import '../style.css';

const Input = (props) => {
  return (
     <input className="form-input"
             type= "text"
             name={props.name}
             value={props.value}
             placeholder={props.placeholder}
             onChange={props.onChangeValue} />
    )
} 

export default Input;