import React from 'react';

function CheckboxInput(props) {
  return (
    <label style={{display: 'block'}}>
      { props.label }:
      <input name={props.name} type="checkbox" value="1" checked={props.checked} onChange={props.onChange} />
    </label>
  );
}

export default CheckboxInput;
