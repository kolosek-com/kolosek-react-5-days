import React, { Component } from 'react';
// components
import DocumentsEditor from './components/DocumentsEditor';
import DocumentsManager from './components/DocumentsManager';
// styles 
import './styles.css';

class DocumentsPage extends Component {
  
  constructor(props) {
    super();
    this.state = { documents: {}, document: null, unsaved: {} }
  };

  next_id = 0;
  // 'database' documents
  documents = {};

  onDocumentEdit = (inputName, inputValue) => {
    this.setState((prevState) => {
      var document = {...prevState.document, [inputName]: inputValue, unsaved: true };
      var unsaved = {...prevState.unsaved, [document.id]: {...document} };

      return { document: document, unsaved: unsaved };
    });
  };

  saveDocument = ({ id, title, content}) => {
    var document_id = id ? parseInt(id) : this.next_id++;

    if (title && content) {
      this.documents[document_id] = { title, content };

      this.setState((prevState) => {
        var documents = {...prevState.documents};
        var unsaved = {...prevState.unsaved};

        documents[document_id] = { title, content };
        delete unsaved[document_id];

        return { documents: documents, unsaved: unsaved, document: { id: null, title: "", content: ""} };
      });
    }
  };

  deleteDocument = () => {
    delete this.documents[this.state.document.id];
    this.setState((prevState) => {
      var unsaved = {...prevState.unsaved};
      var documents = {...prevState.documents};

      delete unsaved[prevState.document.id];
      delete documents[prevState.document.id];

      return { documents: documents, unsaved: unsaved };
    });
  };

  addDocumentMode = () => {
    this.setState({ document: { id: null, title: "", content: ""}});
  };

  editDocumentMode = (id) => {
    this.setState((prevState) => {
      var next = prevState.unsaved[id] || this.documents[id];
      return { document: { ...next, id: id } };
    });
  };

  searchDocuments = (query) => {
    var results = {};

    if (!query) {
      results = { ...this.documents };
    } else {
      Object.keys(this.documents).map((dId) =>{
        query = query.toLowerCase();
        var saved = this.documents[dId].title.toLowerCase().includes(query) || 
                    this.documents[dId].content.toLowerCase().includes(query);

        if (saved) {
          results[dId] = this.documents[dId];
        };
      });
    };

    this.setState({ documents: results });
  };

  render () {
    return (
      <div className="documents-page">
        <DocumentsManager 
          documents={this.state.documents}
          unsaved={this.state.unsaved}
          addDocument={this.addDocumentMode}
          editDocument={this.editDocumentMode}
          searchDocuments={this.searchDocuments} />
        {
          this.state.document ? 
            <DocumentsEditor 
              onChange={this.onDocumentEdit}
              document={this.state.document} 
              editMode={this.editDocumentMode}
              deleteDocument={this.deleteDocument}
              onSubmit={this.saveDocument} /> :
            <div className="documents-editor-turn-on">
              Message
            </div>
        }
      </div>
    );
  };
};

export default DocumentsPage;