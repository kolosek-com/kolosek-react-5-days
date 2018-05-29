import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class SearchBar extends PureComponent {

  constructor(props) {
    super();
    this.state = { query: "" };
  };

  searchByQuery = (event) => {
    this.setState({ query: event.target.value }, () => {
      this.props.onChange(this.state.query);
    })
  };

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.query} type="search" name="query" placeholder="Search" onChange={this.searchByQuery}/>
      </div>
    );
  };
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;