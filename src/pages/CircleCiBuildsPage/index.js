import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Media from "react-media";

import CircleCiDashboardPage from '../CircleCiDashboardPage';
import CircleCiBuilds from '../../components/CircleCiBuilds';

const CircleCiBuildsPage = () => {

  return (
    <Switch>
      <Route exact path='/' component={CircleCiBuilds} />
      <Route path='/build/:id' component={CircleCiDashboardPage} />
    </Switch>
  );
};

export default CircleCiBuildsPage;