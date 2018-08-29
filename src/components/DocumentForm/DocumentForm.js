import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DocumentForm extends Component{
  constructor(props) {
    super();
  }

  handleChange = (e) => {
    this.props.onInputChange(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.props.document)
  }

  render() {
    let { document } = this.props

    return (
      <div className="document-form-box">
        <form className="document-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="title" 
            value={document.title} 
            onChange={this.handleChange} />
          
          <input 
            type="text" 
            name="content" 
            value={document.content}
            onChange={this.handleChange} />

          <input 
            type="Submit"/>
        </form>
      </div>
    )
  }
}

DocumentForm.propTypes = {
  document: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default DocumentForm