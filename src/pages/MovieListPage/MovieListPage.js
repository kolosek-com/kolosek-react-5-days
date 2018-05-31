import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  getMovieList,
  selectMovie,
} from '../../reducers/MovieReducer/actions';

class MovieListPage extends Component {
  componentDidMount() {
    this.props.getMovieList();
  }

  selectMovie = (movie) => () => {
    this.props.selectMovie(movie);
  }

  render() {
    return (
      <div>
        <h1>Movie list page</h1>
        {
          this.props.movies.map((movie, index) => {
            return (
              <p key={movie.id}>
                <Link
                  onClick={this.selectMovie(movie)}
                  to={`/movie/${movie.id}`}
                >
                  { `${index+1}.` }
                  { movie.title }
                </Link>
              </p>
            );
          })
        }
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    movies: state.movies.movieList,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getMovieList,
    selectMovie,
  }, dispatch);
}

const MovieListPage_Connected = connect(stateToProps, dispatchToProps)(MovieListPage);

export default MovieListPage_Connected;
