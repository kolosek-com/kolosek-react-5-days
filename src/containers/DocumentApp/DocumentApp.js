import React, { Component } from 'react'
import DocumentSidebar from '../DocumentSidebar/DocumentSidebar'
import DocumentHeader from '../../components/DocumentHeader/DocumentHeader'
import DocumentForm from '../../components/DocumentForm/DocumentForm'

const documents = [
  { id: "23232323", title: "One", content: "test" },
  { id: "43343434", title: "Two", content: "test" },
  { id: "5454322", title: "Three", content: "test" },
  { id: "8787878", title: "Four", content: "test" }
]

class DocumentApp extends Component {
  constructor() {
    super();

    this.handleDocumentClick = this.handleDocumentClick.bind(this)

    this.state = {
      documents: documents,
      selectedDocument: {
        title: "",
        content: ""
      },
      formIsOpen: false,
      buttonsEnabled: false
    }

    this.handleOpenForm = this.handleOpenForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleOpenForm (e) {
    this.setState({
      formIsOpen: !this.state.formIsOpen
    })
  }

  handleDocumentClick (id) {
    this.setState({
      selectedDocument: this.state.documents.find(document => document.id === id),
      buttonsEnabled: true,
      formIsOpen: true
    })
  }

  handleSubmit (data) {
    if(this.state.selectedDocument.id === undefined) {
      this.saveDocument(data)  
    } else {
      this.editDocument(data)  
    }
  }

  editDocument (data) {
    var index = this.state.documents.findIndex(document => document.id === this.state.selectedDocument.id)
    var newDocuments = this.state.documents
    newDocuments[index] = {
      id: this.state.selectedDocument.id,
      title: data.title,
      content: data.content
    }

    this.setState({
      documents: newDocuments,
      selectedDocument: {
        title: "",
        content: ""
      },
      formIsOpen: false,
      buttonsEnabled: false
    })
  }

  saveDocument(data) {
    var newDocument = {
      id: data.title,
      title: data.title,
      content: data.content
    }

    this.setState({
      documents: [...this.state.documents, newDocument],
      selectedDocument: {
        title: "",
        content: ""
      },
      formIsOpen: false,
      buttonsEnabled: false
    })
  }

  handleDelete (e) {
    e.preventDefault()

    if(window.confirm('Are you shure?')) {
      var documents = this.state.documents.filter(document => document.id !== this.state.selectedDocument.id)

      this.setState({
        documents: documents,
        selectedDocument: {
          title: "",
          content: ""
        },
        formIsOpen: false,
        buttonsEnabled: false
      })
    }
  }

  render () {
    console.log(this.state)
    let form = (<h4>Please select document or add new</h4>)
    if(this.state.formIsOpen) {
      form = <DocumentForm 
              selectedDocument={this.state.selectedDocument} 
              onInputChange={this.handleInputChange} 
              handleSubmit={this.handleSubmit}/>
    }

    var documents = this.state.documents
    console.log(documents)

    return (
      <div className="container">
        <DocumentSidebar documents={documents} onClickHandler={this.handleDocumentClick} handleOpenForm={this.handleOpenForm} />

        <div className="main">
          <DocumentHeader 
            buttonsEnabled={this.state.buttonsEnabled}
            handleDelete={this.handleDelete} />

          { form }
        </div>
      </div>
    )
  }
}

export default DocumentApp