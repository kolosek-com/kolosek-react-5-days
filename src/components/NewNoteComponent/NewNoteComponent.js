import React from 'react';

import './NewNoteComponent.css';

function NewNoteComponent(props) {
  return(
    <div>
      <div className="new-note-container">
        <input
          type="text"
          name="title"
          value={props.title}
          placeholder="Enter the title"
          className="title-field"
          onChange={props.change}
        />
      <textarea
          name="body"
          value={props.body}
          placeholder="Enter the note"
          className="body-field"
          onChange={props.change}
        />
      </div>
    </div>
  );
}

export default NewNoteComponent;
