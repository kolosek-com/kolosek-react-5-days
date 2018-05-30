import React, { Component } from 'react';
// components
import DocumentsEditor from './components/DocumentsEditor';
import DocumentsManager from './components/DocumentsManager';
// styles 
import './styles.css';

const emptyDocument= { id: null, title: "", content: ""};

class DocumentsPage extends Component {

  next_id = 0;
  // 'database' documents
  documents = {};
  
  constructor(props) {
    super();
    this.state = { documents: {}, document: null, unsaved: {} }
  };

  onDocumentEdit = (inputName, inputValue) => {
    this.setState((prevState) => {
      var document = {...prevState.document, [inputName]: inputValue, unsaved: true };
      var unsaved = {...prevState.unsaved, [document.id]: {...document} };

      return { document: document, unsaved: unsaved };
    });
  };

  saveDocument = ({ id, title, content}) => {
    if (title && content) {
      this.setState((prevState) => {
        var document_id = id ? parseInt(id) : this.next_id++;
        var documents = {...prevState.documents};
        var unsaved = {...prevState.unsaved};

        this.documents[document_id] = { title, content };
        documents[document_id] = { title, content };
        delete unsaved[document_id];

        return { documents: documents, unsaved: unsaved, document: emptyDocument };
      });
    }
  };

  deleteDocument = () => {    
    this.setState((prevState) => {
      var unsaved = {...prevState.unsaved};
      var documents = {...prevState.documents};

      delete this.documents[prevState.document.id];
      delete unsaved[prevState.document.id];
      delete documents[prevState.document.id];

      return { documents: documents, unsaved: unsaved, document: emptyDocument };
    });
  };

  addDocumentMode = () => {
    this.setState({ document: emptyDocument });
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
    const { documents, unsaved } = this.state;

    return (
      <div className="documents-page">
        <DocumentsManager 
          documents={documents}
          unsaved={unsaved}
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