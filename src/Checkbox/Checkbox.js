import React from 'react';
import '../style.css';

const Checkbox = (props) => {
  return (
      <div>
        <h6>I agree with terms and conditions</h6>
        <input className="form-input"
               type="checkbox"
               onChange={props.handleCheckChange} />
      </div>
    )
} 

export default Checkbox;