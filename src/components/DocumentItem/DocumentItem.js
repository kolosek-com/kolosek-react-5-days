import React from 'react';
import PropTypes from 'prop-types';

import './DocumentItem.css';

function DocumentItem({ item, selected, unsavedChanges, onClick }) {
  let clickHandler = onClick;
  let classes = 'document-item';
  if (selected) classes += ' selected';
  if (unsavedChanges) classes += ' unsaved';
  return (
    <li className={classes} onClick={ () => clickHandler(item.id) }>
      {item.name}
    </li>
  );
}

DocumentItem.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

export default DocumentItem;
