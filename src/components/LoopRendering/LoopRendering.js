import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';

const movies = [
  {
    title: 'Inception',
    duration: '2h01m',
    id: '1231321'
  },
  {
    title: 'Looper',
    duration: '1h47m',
    id: '1231322'
  },
  {
    title: 'Cloud Atlas',
    duration: '2h50h',
    id: '1231324'
  },
];

class LoopRendering extends Component {

  renderMovies = () => {
    // It is important to have unique id (don't use just index! it's not unique within whole app)
    return movies.map((item, index) => (
      <MovieItem
        key={item.id}
        item={item}
      />
    ));
  }

  render() {
    return (
      <div>
        {
          this.renderMovies()
        }
      </div>
    );
  }
}

export default LoopRendering;
