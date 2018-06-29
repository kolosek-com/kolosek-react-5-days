import React from 'react';
import InputFieldComponent from '../InputFieldComponent/InputFieldComponent';

import './SearchComponent.css';

function SearchComponent (props) {
  return(
    <div>
      <InputFieldComponent
        className='notes-search'
        type='text'
        name='search'
        placeholder={props.placeholder}
        change={props.handleChange}
      />
    </div>
  );
}

export default SearchComponent;
