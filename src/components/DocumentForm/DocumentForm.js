import React, { PureComponent } from 'react'

class DocumentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.selectedDocument.title,
      content: this.props.selectedDocument.content
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedDocument.title !== prevProps.selectedDocument.title || this.props.selectedDocument.content !== prevProps.selectedDocument.content) {
      this.setState({
        title: this.props.selectedDocument.title,
        content: this.props.selectedDocument.content
      })
    }
  }

  onInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler (e) {
    e.preventDefault()

    this.props.handleSubmit(this.state)
  }

  render() {
    return <div className="document-form-box">
      <form className="document-form" onSubmit={this.submitHandler}>
        <input 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.onInputChange} />
        
        <input 
          type="text" 
          name="content" 
          value={this.state.content}
          onChange={this.onInputChange} />

        <input 
          type="Submit"/>
      </form>
    </div>
  }
}

export default DocumentForm