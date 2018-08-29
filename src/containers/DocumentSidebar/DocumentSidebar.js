import React, { Component } from 'react'
import DocumentListItem from '../DocumentListItem/DocumentListItem'

class DocumentSidebar extends Component {
  constructor(props) {
    super()
  }

  searchDocuments = (e) => {
    let term = e.target.value
    this.props.changeFilter(term)
  }

  renderDocuments (documents) {
    return documents.map(document => <DocumentListItem key={document.id} id={document.id} title={document.title} onClickHandler={this.props.onClickHandler}/>)
  }

  render () {
    return (
      <div className="sidebar">
        <div>
          <input 
            type="text" 
            name="search-documents" 
            placeholder="Search..."
            onChange={this.searchDocuments} />
          <button 
            className="add-button"
            onClick={this.props.handleOpenForm}>+</button>

          {
            this.renderDocuments(this.props.documents)
          }
        </div>
      </div>
    )
  }
}

export default DocumentSidebar