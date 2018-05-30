import React from 'react';

import './styles.css';

const AddBtn = ({ addRecord }) => {
  return <button className="add-btn" onClick={addRecord}>+</button>
};

export default AddBtn;
