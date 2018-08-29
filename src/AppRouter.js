import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviePage from './pages/MoviePage/MoviePage';
import BuildListPage from './pages/BuildListPage/BuildListPage'
import BuildPage from './pages/BuildPage/BuildPage'
import AuthPage from './pages/AuthPage/AuthPage'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/auth'}
            component={AuthPage}
          />
          <Route
            exact
            path={'/build/:id'}
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
