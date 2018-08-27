import React from 'react'

const TextInput = ({ name, onChangeHandler, value, placeholder, style, type = 'text' }) => (
  <div style={style}>
    <input 
      name={name}
      type={type} 
      onChange={onChangeHandler} 
      value={value} 
      placeholder={placeholder} />
  </div>
)

export default TextInput