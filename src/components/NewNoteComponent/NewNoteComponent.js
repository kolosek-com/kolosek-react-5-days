import React from 'react';
import InputFieldComponent from '../InputFieldComponent/InputFieldComponent';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';

import './NewNoteComponent.css';

function NewNoteComponent(props) {
  return(
    <div>
      <div className="new-note-container">
        <InputFieldComponent
          type="text"
          name="title"
          value={props.title}
          placeholder="Enter the title"
          className="title-field"
          change={props.change}
        />
        <TextAreaComponent
          name="body"
          value={props.body}
          placeholder="Enter the note"
          className="body-field"
          change={props.change}
        />
      </div>
    </div>
  );
}

export default NewNoteComponent;
