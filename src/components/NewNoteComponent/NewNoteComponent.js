import React from 'react';

function NewNoteComponent(props) {
  return(
    <div >
      <form onSubmit={props.submit} className="new-note-container" id="newForm">
        <input
          type="text"
          name="title"
          value={props.title}
          placeholder="Enter the title"
          className="title-field"
          onChange={props.change}
        />
      <textarea form="newForm"
          name="body"
          value={props.body}
          placeholder="Enter the note"
          className="body-field"
          onChange={props.change}
        />
      <input type="submit"
             value={props.changed ? "Submit*" : "Submit"}
             className="note-submit"/>
      </form>
    </div>
  );
}

export default NewNoteComponent;
