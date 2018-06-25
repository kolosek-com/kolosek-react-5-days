import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Media from "react-media";

import CircleCiDashboardPage from '../CircleCiDashboardPage';
import CircleCiBuilds from '../../components/CircleCiBuilds';
import CircleCiBuildDetails from '../../components/CircleCiBuildDetails';

const CircleCiBuildsPage = () => {

  return(
    <Media query="(max-width: 768px)">
      {matches => matches
        ? <Switch>
            <Route path='/builds' component={CircleCiBuilds} />
            <Route path='/build/:id' component={CircleCiBuildDetails} />
          </Switch>
        : <Switch>
            <Route path='/builds/dashboard' component={CircleCiDashboardPage} />
            <Redirect from='/build/:id' to='/builds/dashboard'/>
            <Redirect from='/' to='/builds/dashboard'/>
          </Switch>
      }
    </Media>
  );
};

export default CircleCiBuildsPage;