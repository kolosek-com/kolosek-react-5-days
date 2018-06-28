import React from 'react';

function NewNoteComponent(props) {
  return(
    <div>
      <form>
        <input type="text" placeholder="Enter the title" />
        <textarea placeholder="Enter the note" />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default NewNoteComponent;
