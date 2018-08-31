import React from 'react';
import renderer from 'react-test-renderer';
import { BuildListPage } from './BuildListPage'
import { BrowserRouter as Router }    from 'react-router-dom';

test('BuildListPage with selectedBuild', () => {
  const builds = [{
    branches: {
      development: {
        recent_builds: [{
          added_at: "2018-08-29T09:38:01.019Z",
          build_num: 3,
          is_2_0_job: true,
          is_workflow_job: false,
          outcome: "failed",
          pushed_at: "2018-08-29T09:37:41.548Z",
          status: "failed",
          vcs_revision: "29dc0e38446d5e4a7030caa7e61424b4aee7e175"
        }]
      }
    }
  }]

  const isAuthenticated = jest.fn()
  isAuthenticated.mockReturnValue(true);

  const getCircleciBuilds = jest.fn()
  getCircleciBuilds.mockReturnValue(builds)

  const component = renderer.create(
    <Router>
      <BuildListPage builds={builds} isAuthenticated={isAuthenticated} getCircleciBuilds={getCircleciBuilds} />
    </Router>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
