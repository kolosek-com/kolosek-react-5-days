import React from 'react';
import RenderContext from '../ContextExample/ContextExample';
import FragmentExample from './FragmentExample';
import renderer from 'react-test-renderer';

test('FragmentExample with default context renders', () => {
  const component = renderer.create(
    <FragmentExample />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('FragmentExample wont render if context value not fragment' , () => {
  const component = renderer.create(
    <RenderContext.Provider value="portal">
      <FragmentExample />
    </RenderContext.Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
