import React, { Component } from 'react'
import DocumentListItem from '../DocumentListItem/DocumentListItem'

class DocumentSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: this.props.documents
    }

    this.searchDocuments = this.searchDocuments.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.documents.length !== prevProps.documents.length) {
      this.setState({
        documents: this.props.documents
      })
    }
  }

  searchDocuments (e) {
    let term = e.target.value
    let filtered = []

    if (term === "") {
      filtered = this.props.documents
    } else {
      filtered = this.state.documents.filter(document => document.title.indexOf(term) > -1 || document.content.indexOf(term) > -1)
    }

    this.setState({
      documents: filtered
    })
  }

  renderDocuments (documents) {
    return documents.map(document => <DocumentListItem key={document.id} id={document.id} title={document.title} onClickHandler={this.props.onClickHandler}/>)
  }

  render () {
    return (
      <div className="sidebar">
        <div>
          <input type="text" name="search-documents" placeholder="Search..."  onChange={this.searchDocuments} />
          <button 
            className="add-button"
            onClick={this.props.handleOpenForm}>+</button>

          {
            this.renderDocuments(this.state.documents)
          }
        </div>
      </div>
    )
  }
}

export default DocumentSidebar