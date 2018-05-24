import React, { Component } from 'react';
import _ from 'lodash';
import DocumentList from '../DocumentList/DocumentList';
import DocumentMessage from '../DocumentMessage/DocumentMessage';
import DocumentEditor from '../DocumentEditor/DocumentEditor';
import DocumentButton from '../DocumentButton/DocumentButton';

import './DocumentPage.css';

class DocumentPage extends Component {

  constructor() {
    super();
    this.state = {
      documents: {},
      documentSearch: '',
      selectedDocument: undefined,
      editedDocument: undefined
    };
  }

  filterDocuments = (event) => {
    this.setState({ documentSearch: event.target.value });
  }

  selectDocument = (documentId) => {
    if (this.unsavedChanges() && !window.confirm('Abandon unsaved changes?')) return;

    let doc = { ...this.state.documents[documentId] };
    this.setState({ selectedDocument: doc.id, editedDocument: doc });
  }

  updateDocument = (field, value) => {
    let doc = { ...this.state.editedDocument };
    doc[field] = value;
    this.setState({ editedDocument: doc });
  }

  unsavedChanges = () => {
    if (this.state.selectedDocument === undefined && this.state.editedDocument !== undefined ) {
      return this.state.editedDocument.name != '' || this.state.editedDocument.text != '';
    } else if (this.state.editedDocument !== undefined) {
      return (this.state.documents[this.state.selectedDocument].name !== this.state.editedDocument.name || this.state.documents[this.state.selectedDocument].text !== this.state.editedDocument.text);
    } else {
      return false;
    }
  }

  newDocument = () => {
    if (this.unsavedChanges() && !window.confirm('Abandon unsaved changes?')) return;

    let doc = {
      id: 'doc_' + new Date().getUTCMilliseconds(),
      name: '',
      text: ''
    };
    this.setState({ editedDocument: doc, selectedDocument: undefined });
  }

  saveChanges = () => {
    let doc = { ...this.state.editedDocument };
    let documents = { ...this.state.documents };
    documents[doc.id] = doc;
    this.setState({ documents: documents, selectedDocument: doc.id });
  }

  deleteDocument = () => {
    let doc = this.state.documents[this.state.selectedDocument];
    if (doc === undefined) {
      this.setState({ selectedDocument: undefined, editedDocument: undefined });
    } else if (window.confirm('Are you sure you want to delete "' + doc.name + '"?')) {
      this.setState({ documents: _.omit(this.state.documents, doc.id), selectedDocument: undefined, editedDocument: undefined });
    }
  }

  filteredDocuments = () => {
    let filtered = [];
    Object.keys(this.state.documents).map((documentId) => {
      let doc = this.state.documents[documentId];
      if (this.state.documentSearch === '') {
        filtered.push(doc);
      } else if (doc.name.toLowerCase().includes(this.state.documentSearch.toLowerCase()) || doc.text.toLowerCase().includes(this.state.documentSearch.toLowerCase())) {
        filtered.push(doc);
      }
    });

    return filtered;
  }

  render() {
    let centerArea = this.state.editedDocument === undefined ? (<DocumentMessage />) : (<DocumentEditor editedDocument={this.state.editedDocument} updateDocument={this.updateDocument} />);

    return (
      <div className="document-page__container">
        <div className="row document-page__box">
          <div className="col-4 document-page__box__column">
            <input className="document-page__box__search-input" placeholder="Search" value={this.state.documentSearch} onChange={this.filterDocuments} />
            <DocumentButton className="new-document" disabled={false} onClick={this.newDocument} />
            <DocumentList documents={this.filteredDocuments()} editedDocument={this.state.editedDocument} selectedDocument={this.state.selectedDocument} onSelect={this.selectDocument} />
          </div>
          <div className="col-8">
            <div className="row document-page__header">
              <div className="col-8">
                <h2 className="document-page__header-text">Notes</h2>
              </div>
              <div className="col-2 text-right">
                <DocumentButton className="save-document" disabled={this.state.editedDocument === undefined} onClick={this.saveChanges} />
              </div>
              <div className="col-2">
                <DocumentButton className="delete-document" disabled={this.state.editedDocument === undefined} onClick={this.deleteDocument} />
              </div>
            </div>
            {
              centerArea
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentPage;
