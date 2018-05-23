import React from 'react';
import '../style.css';

const Checkbox = (props) => {
  return (
      <div>
        <h6>I agree with terms and conditions</h6>
        <input className="form-input"
               type="checkbox"
               checked={props.checked}
               onChange={props.onChangeValue} />
      </div>
    )
} 

export default Checkbox;