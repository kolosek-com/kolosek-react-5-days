import React from 'react';

function TextAreaComponent(props) {
  return (
    <textarea
      name={props.name}
      value={props.vale}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.change}
    />
  );
}

export default TextAreaComponent;
