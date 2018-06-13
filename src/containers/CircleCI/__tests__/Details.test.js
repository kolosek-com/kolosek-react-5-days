import React from 'react';
import Details from '../Details';
import { Provider } from 'react-redux';
import store from '../../../store';
import renderer from 'react-test-renderer';

test('Details with default context renders', () => {
  const component = renderer.create(
    <Provider store={store}><Details match={{params: {}}} /></Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});