import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Commit from '../Commit';
import './styles.css';

import { getCircleCiLatestBuilds, selectBuild } from '../../reducers/CircleCiReducer/actions';

class CircleCiBuilds extends Component {
  constructor(props) {
    super();
  };

  componentDidMount() {
    this.props.getCircleCiLatestBuilds();
  };

  componentWillReceiveProps(props) {
    if (props.activeBuildNo) {
      props.selectBuild(parseInt(props.activeBuildNo));
    };
  };

  render() {
    return(
      <div className='circle-ci-builds-page'>
        <h2>Circle Ci</h2>
        <div>
          <label>Latest builds</label>
        </div>
        <div className='latest-builds'>
          { 
            Object.keys(this.props.latestBuilds).map((buildNo) => {
              var build = this.props.latestBuilds[buildNo];

              return (
                <Link 
                  key={`${buildNo}-${build.id}-${build.branchName}-${build.projectName}`} 
                  to={`/build/${buildNo}`}
                >
                  <Commit build={build} buildNo={buildNo} />
                </Link>
              )
            })
          }
        </div>
      </div>
    );
  };
};

const stateToProps = (state) => {
  return {
    latestBuilds: state.circleCi.latestBuilds
  };
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ getCircleCiLatestBuilds, selectBuild }, dispatch);
}

const CircleCiBuilds_Connected = connect(stateToProps, dispatchToProps)(CircleCiBuilds);
export default CircleCiBuilds_Connected;