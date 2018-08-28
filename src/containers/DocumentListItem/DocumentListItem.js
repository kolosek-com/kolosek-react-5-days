import React from 'react'

const DocumentListItem = ({ id, title, onClickHandler }) => {
  return (
    <div className="document-item">
      <div onClick={() => onClickHandler(id)} className="document-list-item">{title}</div>
    </div>
  )
}

export default DocumentListItem