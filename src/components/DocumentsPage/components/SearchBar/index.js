import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SearchBar extends PureComponent {

  constructor(props) {
    super();
  };

  listenForEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.onChange(event.target.value);
    };
  };

  render() {
    return (
      <form className="search-bar" onSubmit={(e) => e.preventDefault() }>
        <input type="search" name="query" placeholder="Search" onKeyPress={this.listenForEnter}/>
      </form>
    );
  };
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;