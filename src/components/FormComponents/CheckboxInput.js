import React from 'react'

const CheckboxInput = ({ id, labelText, name, onChangeHandler, checked, style }) => (
  <div style={style}>
    <label htmlFor={id}>
      {labelText}
      <input 
        id={id}
        name={name}
        type='checkbox' 
        onChange={onChangeHandler}
        checked={checked} />
    </label>
  </div>
)

export default CheckboxInput