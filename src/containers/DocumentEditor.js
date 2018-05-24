import React, {Component} from 'react';

import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

import './css/DocumentEditor.css'

class DocumentEditor extends Component {
  render() {
    return (
      <div className="document_editor-container">
        <LeftPanel />
        <MainPanel />
      </div>
    );
  }
}

export default DocumentEditor;
