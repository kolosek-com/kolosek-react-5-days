import React from 'react';
import PropTypes from 'prop-types';

function DocumentEditor({ editedDocument, updateDocument }) {
  return (
    <div className="row">
      <div className="col-12" style={{ padding: '0' }}>
        <input className="document-page__document-title-input" placeholder="Title of document" value={editedDocument.name} onChange={ (event) => updateDocument('name', event.target.value) } />
      </div>
      <div className="col-12" style={{ padding: '0' }}>
        <textarea className="document-page__document-text-input" placeholder="Text of document" value={editedDocument.text} onChange={ (event) => updateDocument('text', event.target.value) } />
      </div>
    </div>
  );
}

DocumentEditor.propTypes = {
  editedDocument: PropTypes.object.isRequired,
  updateDocument: PropTypes.func.isRequired
};

export default DocumentEditor;
