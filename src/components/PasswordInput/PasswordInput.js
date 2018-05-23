import React from 'react';

function PasswordInput(props) {
  return (
    <label style={{display: 'block'}}>
      { props.label }:
      <input name={props.name} type="password" value={props.value} onChange={props.onChange} />
    </label>
  );
}

export default PasswordInput;
