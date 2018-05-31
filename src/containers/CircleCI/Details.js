import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getBuild } from '../../reducers/CircleCIReducer/actions';

import './css/Details.css'

class Details extends Component {

  componentDidMount() {
    if(!this.props.selectedBuild) {
      const apiKey = sessionStorage.getItem('CIRCLE_CI_API_KEY');
      const params = this.props.match.params
      this.props.getBuild(params.vcs_type, params.username, params.reponame, params.build_num, apiKey)
    }
  }

  render() {
    const { selectedBuild } = this.props
    return (
      <div className="details-container">
        { this.props.selectedBuild ?
          <div>
            <h1 className="details_container__header"><b>Circle CI</b></h1>
            <div className="details_container__build"><b>Build no #{selectedBuild.build_num}</b></div>
            <div className="details_container__info"><b>Project name: {selectedBuild.reponame}</b></div>
            <div className="details_container__info"><b>Branch name: {selectedBuild.branch}</b></div>
            <div className="details_container__info"><b>Status: {selectedBuild.status}</b></div>
            <div className="details_container__info"><b>Commit message:</b></div>
            <div className="details_container__commit">{selectedBuild.subject}</div>
          </div> : 
          <div>Loading data...</div>
        }
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    selectedBuild: state.builds.selectedBuild,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getBuild,
  }, dispatch);
}

const Details_Connected = connect(stateToProps, dispatchToProps)(Details);

export default Details_Connected;
