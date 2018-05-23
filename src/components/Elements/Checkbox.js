import React from 'react';

function Checkbox(props) {
  return (
    <input name={props.name} type="checkbox" value="1" checked={props.checked} onChange={props.onChange} />
  );
}

export default Checkbox;
