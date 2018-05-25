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
      prevState.document = prevState.document || {}
      
      return (prevState.document[inputName] = inputValue);
    });
  };

  saveDocument = ({ id, title, content}) => {
    var document_id = id ? parseInt(id) : this.next_id++;

    this.documents[document_id] = { title, content };

    this.setState((prevState) => {
      prevState.documents[document_id] = { title, content };
      delete prevState.unsaved[document_id];

      return { documents: prevState.documents, unsaved: prevState.unsaved, document: { id: null, title: "", content: ""} };
    });
    this.forceUpdate();
  };

  deleteDocument = () => {
    delete this.documents[this.state.document.id];
    this.setState((prevState) => {
      delete prevState.unsaved[prevState.document.id];
      delete prevState.documents[prevState.document.id];

      return { documents: prevState.documents, unsaved: prevState.unsaved };
    });
  };

  addDocumentMode = () => {
    this.setState((prevState) => {
      if (prevState.document) {
        var id = prevState.document ? prevState.document.id : this.next_id++;
        prevState.unsaved[id] = {...prevState.document, unsaved: true };
      }
      prevState.document = { id: null, title: "", content: ""};
      
      return { document: prevState.document, unsaved: prevState.unsaved};
    })
  };

  editDocumentMode = (id) => {
    this.setState((prevState) => {
      var active = prevState.document;
      
      if (active.id) {
        prevState.unsaved[active.id] = { ...active, unsaved: true};
      }
      var next = prevState.unsaved[id] || this.documents[id]

      return { document: { ...next, id: id }, unsaved: prevState.unsaved };
    });
  };

  searchDocuments = (query) => {
    var results = {};

    if (!query) {
      results = this.documents;
    } else {
      Object.keys(this.documents).map((dId) =>{
        var saved = this.documents[dId].title === query || this.documents[dId].content === query;
        var unsaved = this.state.unsaved[dId] && (this.state.unsaved[dId].title === query || this.state.unsaved[dId].content === query);

        if (saved || unsaved) {
          results[dId] = this.documents[dId];
        };
      });
    };

    this.setState({ documents: results });
    this.forceUpdate();
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