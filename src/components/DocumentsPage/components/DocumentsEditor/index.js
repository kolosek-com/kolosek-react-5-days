import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class DocumentsEditor extends Component {

  constructor(props) {
    super(props);
    this.state = { id: null, title: "", content: "" };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.document && nextProps.document.title !== this.state.title) {
      this.setState({ ...nextProps.document  });
    }
  }

  defaultState() {
    this.setState({ id: null, title: "", content: "" })
  };

  updateDocument = (event) => {
    var target = event.target;
    this.props.onChange(target.name, target.value)
  };

  delete = () => {
    if(window.confirm('Delete warning')) {
      this.props.deleteDocument();
      this.defaultState();
    };
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.defaultState();
  };

  render () {

    return (
      <div className="documents-editor">
        <form onSubmit={this.onSubmit}>
          <div className="editor-actions">
            <button onClick={this.delete} disabled={!this.state.id}>Delete</button>
            <input className="documents-editor-submit" type="submit" value='Edit Document' disabled={!this.state.id}/>
          </div>
          <input 
            className="documents-editor-title" 
            type="text" 
            name="title" 
            value={this.state.title} 
            onChange={this.updateDocument} />
          <textarea 
            className="documents-editor-content" 
            name="content" 
            value={this.state.content} 
            onChange={this.updateDocument} />
          <input className="documents-editor-submit" type="submit" value='Add Document' disabled={this.state.id}/>
        </form>
      </div>
    );
  };
};

DocumentsEditor.propTypes = {
  document: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  deleteDocument: PropTypes.func.isRequired
};

export default DocumentsEditor;