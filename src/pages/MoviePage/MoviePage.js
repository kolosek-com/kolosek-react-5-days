import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MoviePage extends Component {
  render() {
    const { selectedMovie } = this.props;
    if (!selectedMovie) {
      return (
        <Redirect
          to='/'
        />
      )
    }
    return (
      <div>
        <h1>Movie page</h1>
        <p>
          <strong>
            { 'Title: ' }
          </strong>
          { selectedMovie.title }
        </p>
        <p>
          <strong>
            { 'Description: ' }
          </strong>
          { selectedMovie.description }
        </p>
        <p>
          <strong>
            { 'Release date: ' }
          </strong>
          { selectedMovie.release_date }
        </p>
        <br />
        <br />
        <Link to='/'>
          { 'Return to movie list' }
        </Link>
      </div>
    );
  }
}


function stateToProps(state) {
  return {
    selectedMovie: state.movies.selectedMovie,
  };
}

const MoviePage_Connected = connect(stateToProps, null)(MoviePage);

export default MoviePage_Connected;
