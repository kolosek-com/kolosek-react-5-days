import React, { Fragment } from 'react';
import RenderContext from '../ContextExample/ContextExample';

function FragmentExample() {
  // You can also use <> (empty tag) as a shortened syntax
  // Yet, this is more readable
  return (
    <RenderContext.Consumer>
    {
      toRender => {
        if (toRender === 'fragment') {
          return (
            <Fragment>
              <p>Some text.</p>
              <h2>A heading</h2>
              <p>More text.</p>
              <h2>Another heading</h2>
              <p>Even more text.</p>
            </Fragment>
          );
        } else {
          return null;
        }
      }
    }
    </RenderContext.Consumer>
   );
}

export default FragmentExample;
