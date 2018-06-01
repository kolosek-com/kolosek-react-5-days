import React from 'react';
import RenderContext from '../ContextExample/ContextExample';
import PortalExample from './PortalExample';
import renderer from 'react-test-renderer';

test('PortalExample with set context renders', () => {
  const component = renderer.create(
    <RenderContext.Provider value="portal">
      <PortalExample />
    </RenderContext.Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('PortalExample wont render with default context (other than portal)', () => {
  const component = renderer.create(
    <PortalExample />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
