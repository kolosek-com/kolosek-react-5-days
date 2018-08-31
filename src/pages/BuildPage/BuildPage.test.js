import React from 'react';
import renderer from 'react-test-renderer';
import { BuildPage } from './BuildPage'

test('BuildPage with selectedBuild', () => {
  const selectedBuild = {
    build_num: 1,
    reponame: "Test",
    branch: "test",
    status: "Success"
  }

  const component = renderer.create(
    <BuildPage selectedBuild={selectedBuild} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
