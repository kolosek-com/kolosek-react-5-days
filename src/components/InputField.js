import React from 'react';

const InputField = ({label, name, type, input, onChange}) => (
  <div>
    <label>
      {label}
      <input type={type} name={name} value={input} onChange={onChange} />
    </label>
  </div>
);

export default InputField;
