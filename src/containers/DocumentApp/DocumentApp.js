import React, { Component } from 'react'
import DocumentSidebar from '../DocumentSidebar/DocumentSidebar'
import DocumentHeader from '../../components/DocumentHeader/DocumentHeader'
import DocumentForm from '../../components/DocumentForm/DocumentForm'

class DocumentApp extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="container">
        <DocumentSidebar />

        <div className="main">
          <DocumentHeader />
          <DocumentForm />
        </div>
      </div>
    )
  }
}

export default DocumentApp