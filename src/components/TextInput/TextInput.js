import React from 'react';

function TextInput(props) {
  return (
    <label style={{display: 'block'}}>
      { props.label }:
      <input name={props.name} type="text" value={props.value} onChange={props.onChange} />
    </label>
  );
}

export default TextInput;
