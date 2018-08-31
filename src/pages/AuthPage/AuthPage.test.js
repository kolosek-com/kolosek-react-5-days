import React from 'react';
import renderer from 'react-test-renderer';
import { AuthPage } from './AuthPage'

test('AuthPage', () => {
  const component = renderer.create(
    <AuthPage loginUser={() => {}} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})