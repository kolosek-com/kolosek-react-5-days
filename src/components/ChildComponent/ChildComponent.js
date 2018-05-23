import React from 'react';

// Our child component is a CONTROLLED checkbox,
// meaning that its' value is controlled by component 
function ChildComponent(props) {
  return (
    <div>
      <label>
        {
          props.label
        }
      </label>
      <input
        checked={props.checked}
        onChange={props.handleChange}
        type="checkbox"
      />
    </div>
  );
}

export default ChildComponent;
