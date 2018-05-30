import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class DocumentsEditor extends Component {

  constructor(props) {
    super();
  };

  updateDocument = (event) => {
    var target = event.target;
    this.props.onChange(target.name, target.value)
  };

  delete = () => {
    if(window.confirm('Delete warning')) {
      this.props.deleteDocument();
    };
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.document);
  };

  render () {
    var document = this.props.document

    return (
      <div className="documents-editor">
        <div className="editor-actions">
          <button onClick={this.delete} disabled={!document.id}>Delete</button>
          <input className="documents-editor-submit" type="submit" value='Edit Document' disabled={!document.id}/>
        </div>
        <form onSubmit={this.onSubmit}>
          <input 
            className="documents-editor-title" 
            type="text" 
            name="title" 
            value={document.title} 
            onChange={this.updateDocument} />
          <textarea 
            className="documents-editor-content" 
            name="content" 
            value={document.content} 
            onChange={this.updateDocument} />
          <input className="documents-editor-submit" type="submit" value='Add Document' disabled={this.props.id}/>
        </form>
      </div>
    );
  };
};

export default DocumentsEditor;