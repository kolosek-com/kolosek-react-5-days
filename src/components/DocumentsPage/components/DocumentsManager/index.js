import React from 'react';
//components
import SearchBar from '../SearchBar';
import AddBtn from '../AddBtn';
import Document from '../Document';
//styles
import './styles.css';

const DocumentsManager = ({ unsaved, documents, addDocument, editDocument, searchDocuments }) => {
  return (
    <div className="documents-manager">
      <div className="manager-tools">
        <SearchBar onChange={searchDocuments} />
        <AddBtn addRecord={addDocument}/>
      </div>
      <div className="documents-list">
        { 
          Object.keys(documents).map((id) => {
            var document = unsaved[id] || documents[id];

            return <Document key={"document-"+id} document={ { ...document, id: id} } openInEditor={editDocument}/>
          })
        }
      </div>
    </div>
  );
};

export default DocumentsManager;