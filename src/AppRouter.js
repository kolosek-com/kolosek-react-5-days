import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import BuildListPage from './pages/BuildListPage/BuildListPage';
import BuildPage from './pages/BuildPage/BuildPage';
import LoginPage from './pages/LoginPage/LoginPage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/login'}
            component={LoginPage}
          />
          <Route
            exact
            path={'/build/:vcs_type/:username/:project/:build_num'}
            component={BuildPage}
          />
          <Route
            exact
            path={'/'}
            component={BuildListPage}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
