import React from 'react';
import PropTypes from 'prop-types';
import './ListComponent.css';

function ListComponent({ item, clicked }){
  return (
    <div onClick={clicked}>
        <h3>{ item.title }</h3>
        <p key={`document_${item.id}`}>
          { item.body }
        </p>
    </div>
  );
}

ListComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListComponent;
