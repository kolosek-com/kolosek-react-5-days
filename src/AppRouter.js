import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import CircleCiRoute      from './CircleCiRoute';
import CircleCiBuildsPage from './pages/CircleCiBuildsPage';
import AuthenticatePage   from './pages/AuthenticatePage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <CircleCiRoute path='/' component={CircleCiBuildsPage} />
          <Route
            exact
            path={'/auth'}
            component={AuthenticatePage}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
