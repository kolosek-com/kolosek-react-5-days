import React from 'react';

import CircleCiBuildDetails from '../../components/CircleCiBuildDetails';
import CircleCiBuilds from '../../components/CircleCiBuilds';

import './styles.css'

const CircleCiDashboardPage = () => {
  return (
    <div className='circle-ci-dashboard'>
      <div className='dashboard-child'>
        <CircleCiBuilds />
      </div>
      <div className='dashboard-child'>
        <CircleCiBuildDetails />
      </div>
    </div>
  );
};

export default CircleCiDashboardPage;