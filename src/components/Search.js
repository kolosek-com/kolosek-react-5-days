import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <input name="search" type="text" placeholder="Search a document" value={this.props.val} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Search;
