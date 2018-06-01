import React from 'react';
import RenderContext from '../ContextExample/ContextExample';

function Toolbar(props) {
  return (
    <RenderContext.Consumer>
    {
      toRender => (
        <button
          onClick={props.changeFragment}
        >
          { `Currently selected: ${toRender}` }
        </button>
      )
    }
    </RenderContext.Consumer>
  );
}

export default Toolbar;
