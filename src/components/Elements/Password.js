import React from 'react';

function Password(props) {
  return (
    <input name={props.name} type="password" value={props.value} onChange={props.onChange} />
  );
}

export default Password;