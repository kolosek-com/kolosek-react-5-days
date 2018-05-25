import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviePage from './pages/MoviePage/MoviePage';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={'/movie/:id'}
            component={MoviePage}
          />
          <Route
            exact
            path={'/'}
            component={MovieListPage}
          />
        </div>
      </Router>
    )
  }
}

export default AppRouter;
