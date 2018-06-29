import React from 'react';

import './SearchComponent.css';

function SearchComponent (props) {
  return(
    <div>
      <input
       className="notes-search"
       type="text"
       placeholder={props.placeholder}
       onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchComponent;
