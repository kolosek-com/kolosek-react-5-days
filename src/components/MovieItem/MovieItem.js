import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function MovieItem({ item }) {
  const movieItem = _.omit(item, 'id');
  return (
    <div>
      {
        Object.keys(movieItem).map((key, indexOfKey) => {
          const value = item[key];
          return (
            <p>
              <b>{ key } :</b>
              { value }
            </p>
          );
        })
      }
      <hr/>
    </div>
  );
}

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MovieItem;
