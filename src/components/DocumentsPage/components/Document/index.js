import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Document extends PureComponent {

  constructor(props) {
    super();
  };

  openInEditor = () => {
    this.props.openInEditor(this.props.document.id);
  };

  render() {
    return (
      <div className="document" onClick={this.openInEditor}>
        { this.props.document.title } {this.props.document.unsaved ? '(Unsaved)' : ''}
      </div>
    );
  };
};

Document.propTypes = {
  document: PropTypes.object.isRequired
};

export default Document;