import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import List from './containers/CircleCI/List'
import Details from './containers/CircleCI/Details'
import ApiProvider from './containers/CircleCI/ApiProvider'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/build/:id'}
            component={Details}
          />
          <Route
            exact
            path={'/'}
            component={List}
          />
          <Route
            exact
            path={'/api_key'}
            component={ApiProvider}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
