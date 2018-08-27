import React, { Component } from 'react'
import DocumentListItem from '../DocumentListItem/DocumentListItem'

const documents = [
  { id: "23232323", title: "One", content: "prvi" },
  { id: "43343434", title: "Two", content: "drugi" },
  { id: "5454322", title: "Three", content: "ggfgfgf" },
  { id: "8787878", title: "Four", content: "hgghgh" }
]

class DocumentSidebar extends Component {
  constructor() {
    super();

    this.state = {
      documents: documents
    }

    this.searchDocuments = this.searchDocuments.bind(this)
  }

  searchDocuments (e) {
    let term = e.target.value
    let filtered = []

    if ( term === "") {
      filtered = documents
    } else {
      filtered = this.state.documents.filter(document => document.title.indexOf(term) > -1 || document.content.indexOf(term) > -1)
    }

    this.setState({
      documents: filtered
    })
  }

  renderDocuments (documents) {
    return documents.map(document => <DocumentListItem key={document.id} title={document.title} />)
  }

  render () {
    return (
      <div className="sidebar">
        <div>
          <input type="text" name="search-documents" placeholder="Search..."  onChange={this.searchDocuments} />
          <button className="add-button">+</button>

          {
            this.renderDocuments(this.state.documents)
          }
        </div>
      </div>
    )
  }
}

export default DocumentSidebar