import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentItem from '../DocumentItem/DocumentItem';

import './DocumentList.css';

class DocumentList extends Component {
  renderDocuments = () => {
    return this.props.documents.map((item) => {
      let selected = this.props.selectedDocument === item.id;
      let unsavedChanges = this.props.editedDocument === undefined ? false : (item.id === this.props.editedDocument.id) && (item.name !== this.props.editedDocument.name || item.text !== this.props.editedDocument.text);
      return (
        <DocumentItem key={item.id} item={item} selected={selected} unsavedChanges={unsavedChanges} onClick={this.props.onSelect}/>
      )
    });
  }

  render() {
    return (
      <ul className="document-list">
        {
          this.renderDocuments()
        }
      </ul>
    );
  }
}

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedDocument: PropTypes.string,
  editedDocument: PropTypes.object
};

export default DocumentList;
