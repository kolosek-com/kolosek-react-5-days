import React, {Component} from 'react';
import { connect } from 'react-redux';

import './css/Details.css'

class Details extends Component {

  render() {
    const { selectedBuild } = this.props
    return (
      <div className="details-container">
        <h1 className="details_container__header"><b>Circle CI</b></h1>
        <div className="details_container__build"><b>Build no #{selectedBuild.build_num}</b></div>
        <div className="details_container__info"><b>Project name: {selectedBuild.reponame}</b></div>
        <div className="details_container__info"><b>Branch name: {selectedBuild.branch}</b></div>
        <div className="details_container__info"><b>Status: {selectedBuild.status}</b></div>
        <div className="details_container__info"><b>Commit message:</b></div>
        <div className="details_container__commit">{selectedBuild.subject}</div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    selectedBuild: state.builds.selectedBuild,
  };
}

const Details_Connected = connect(stateToProps)(Details);

export default Details_Connected;
