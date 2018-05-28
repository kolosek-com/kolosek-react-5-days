import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './BuildPage.css';

class BuildPage extends Component {
  render() {
    const { selectedBuild } = this.props;
    if (!selectedBuild) {
      return (
        <Redirect
          to='/'
        />
      )
    }
    let statusClass = 'text-dark';
    if(selectedBuild.status === 'fixed' || selectedBuild.status === 'success' ) {
      statusClass = 'text-success'
    } else if (selectedBuild.status === 'failed'){
      statusClass = 'text-danger'
    } else if (selectedBuild.status === 'running'){
      statusClass = 'text-info'
    }
    return (
      <div className="circleci-build-page">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Circle CI</h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <h4>Build no #{selectedBuild.build_num}</h4>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 font-weight-bold">
            Project name: <span className="ml-4">{selectedBuild.reponame}</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 font-weight-bold">
            Branch name: {selectedBuild.branch}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 font-weight-bold">
            Status: <span className={statusClass}>{selectedBuild.status}</span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 font-weight-bold">
            Commit message:
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 font-weight-bold text-muted pl-5">
            {selectedBuild.subject}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Link to='/'>
              { 'Return to build list' }
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


function stateToProps(state) {
  return {
    selectedBuild: state.builds.selectedBuild,
  };
}

const BuildPage_Connected = connect(stateToProps, null)(BuildPage);

export default BuildPage_Connected;
