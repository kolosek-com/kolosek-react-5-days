import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

class CircleCiBuildDetails extends Component {
  constructor(props) {
    super();
  };

  render() {
    const { buildNo, projectName, branchName, status, commitMsg } = this.props.commitDetails;
    return (
      status ?
      <div className='circle-ci-build-details'>
        <h2>Circle Ci</h2>
        <div>
          <label>Build no #{buildNo}</label>
        </div>
        <div className='details-data'>
          Project name: {projectName}
        </div>
        <div className='details-data'>
          Branch name: {branchName}
        </div>
        <div className='details-data'>
          Status: <label className={'status-' + status}>{status.charAt(0).toUpperCase() + status.slice(1)}</label>
        </div>
        <div className='details-data'>
          Commit message:
          <div className='commitMsg'>
            { commitMsg }
          </div>
        </div>
      </div> : null
    );
  };
};

const stateToProps = (state) => {
  return {
    commitDetails: state.circleCi.commitDetails
  };
}

const CircleCiBuildDetails_Connected = connect(stateToProps, null)(CircleCiBuildDetails);
export default CircleCiBuildDetails_Connected;