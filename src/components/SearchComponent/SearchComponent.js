import React, { Component } from 'react';

function SearchComponent (props) {
  return(
    <div>
    <form>
      <input
       type="text"
       placeholder={props.placeholder}
       onChange={props.handleChange}
      />
    </form>
    </div>
  );
}

export default SearchComponent;
