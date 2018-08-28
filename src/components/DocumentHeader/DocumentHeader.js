import React from 'react'

const DocumentHeader = (props) => (
  <div>
    Documents

    <div className="document-actions">
      <button
        onClick={props.handleDelete}
        disabled={!props.buttonsEnabled}>Delete</button>
    </div>
  </div>
)

export default DocumentHeader