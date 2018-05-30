import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import ProjectSelect from '../../components/ProjectSelect/ProjectSelect';
import BranchSelect from '../../components/BranchSelect/BranchSelect';
import CircleCiBuild from '../../components/CircleCiBuild/CircleCiBuild';

import './BuildListPage.css';

import {
  getBranchBuildList,
  getProjectBuildList,
  getBuildList,
  selectBuild,
} from '../../reducers/BuildReducer/actions';

class BuildListPage extends Component {
  componentDidMount() {
    this.fetchBuilds(this.props.project, this.props.branch);
  }

  fetchBuilds = (project, branch) => {
    if (project && branch) {
      this.props.getBranchBuildList(this.props.apiKey, project, branch);
    } else if (project) {
      this.props.getProjectBuildList(this.props.apiKey, project);
    } else {
      this.props.getBuildList(this.props.apiKey);
    }
  }

  selectBuild = (build) => () => {
    this.props.selectBuild(build);
  }

  selectProject = (project) => {
    this.fetchBuilds(project, null);
  }

  selectBranch = (branch) => {
    this.fetchBuilds(this.props.project, branch.length > 0 ? branch : null);
  }

  render() {
    const { apiKey } = this.props;
    if (!apiKey) {
      return (
        <Redirect
          to='/login'
        />
      )
    }
    return (
      <div className="circle-ci-build-list">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Circle CI</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Latest Builds</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ProjectSelect onSelect={this.selectProject} />
          </div>
          <div className="col-9">
            <BranchSelect onSelect={this.selectBranch} />
          </div>
        </div>

        {
          this.props.builds.map((build, index) => {
            return (<CircleCiBuild build={build} onClick={this.selectBuild(build)} />);
          })
        }
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    apiKey: state.apiKey.currentKey,
    builds: state.builds.buildList,
    project: state.projects.selectedProject,
    branch: state.projects.selectedbranch,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getBranchBuildList,
    getProjectBuildList,
    getBuildList,
    selectBuild,
  }, dispatch);
}

const BuildListPage_Connected = connect(stateToProps, dispatchToProps)(BuildListPage);

export default BuildListPage_Connected;
