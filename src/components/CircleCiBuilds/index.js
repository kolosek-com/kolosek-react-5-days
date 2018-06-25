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
  }

  selectBuild = (build, buildNo) => (e) => {
    this.props.selectBuild({...build,  buildNo: buildNo});
  }

  render() {
    return(
      <div className='circle-ci-builds-page'>
        <h2>Circle Ci</h2>
        <div>
          <label>Latest builds</label>
        </div>
        <div className='latest-builds'>
          { 
            this.props.latestBuilds.map((build, i) => 
              <Link 
                key={i + '-' + build.id + '-' + build.branchName + '-' + build.projectName + '-'} 
                onClick={this.selectBuild(build, i)}
                to={`/build/${build.id}`}
              >
                <Commit build={build} buildNo={i} />
              </Link>
            )
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