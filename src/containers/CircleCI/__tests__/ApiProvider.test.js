import React from 'react';
import ApiProvider from '../ApiProvider';
import { Provider } from 'react-redux';
import store from '../../../store';
import renderer from 'react-test-renderer';

test('ApiProvider with default context renders', () => {
  const component = renderer.create(
    <Provider store={store}><ApiProvider /></Provider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});