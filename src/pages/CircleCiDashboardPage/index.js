import React from 'react';
import PropTypes from 'prop-types';

import CircleCiBuildDetails from '../../components/CircleCiBuildDetails';
import CircleCiBuilds from '../../components/CircleCiBuilds';

import './styles.css'

const CircleCiDashboardPage = (props) => {
  return (
    <div className='circle-ci-dashboard'>
      <div className='dashboard-child'>
        <CircleCiBuilds activeBuildNo={props.match.params.id}/>
      </div>
      <div className='dashboard-child'>
        <CircleCiBuildDetails />
      </div>
    </div>
  );
};

CircleCiDashboardPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node.isRequired,
    }).isRequired,
  }).isRequired
};


export default CircleCiDashboardPage;