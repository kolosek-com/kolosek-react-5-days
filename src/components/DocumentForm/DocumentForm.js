import React from 'react'

const DocumentForm = (props) => (
  <div className="document-form-box">
    <form className="document-form">
      <input type="text" name="document-title" />
      <input type="textarea" name="document-content" />
      <input type="Submit" />
    </form>
  </div>
)

export default DocumentForm