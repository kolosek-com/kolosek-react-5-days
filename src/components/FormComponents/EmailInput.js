import React from 'react'

const EmailInput = ({ name, onChangeHandler, value, placeholder, style }) => (
  <div style={style}>
    <input 
      name={name}
      type='email' 
      onChange={onChangeHandler} 
      value={value} 
      placeholder={placeholder} />
  </div>
)

export default EmailInput