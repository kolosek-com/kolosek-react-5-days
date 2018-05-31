import React, { Fragment } from 'react';

function FragmentExample() {
  // You can also use <> (empty tag) as a shortened syntax
  // Yet, this is more readable
  return (
    <Fragment>
      <p>Some text.</p>
      <h2>A heading</h2>
      <p>More text.</p>
      <h2>Another heading</h2>
      <p>Even more text.</p>
    </Fragment>
   );
}

export default FragmentExample;
