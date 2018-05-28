import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import ProjectSelect from '../../components/ProjectSelect/ProjectSelect';
import BranchSelect from '../../components/BranchSelect/BranchSelect';

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
            let statusClass = 'circleci-build-status';
            if(build.status === 'fixed' || build.status === 'success' ) {
              statusClass += ' success'
            } else if (build.status === 'failed'){
              statusClass += ' fail'
            } else if (build.status === 'running'){
              statusClass += ' running'
            }
            return (
              <div className="row circleci-build" key={`${build.vcs_type}-${build.username}-${build.reponame}-${build.build_num}`}>
                <div className="col-12">
                  <Link
                    onClick={this.selectBuild(build)}
                    to={`/build/${build.vcs_type}/${build.username}/${build.reponame}/${build.build_num}`}
                    className="circleci-build-link"
                  >
                    <div className="row">
                      <div className="col-10 circleci-build-title">
                        {build.branch}/{build.reponame} #{build.build_num}
                      </div>
                      <div className="col-2">
                        <TimeAgo date={build.queued_at} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8 circleci-build-commit-msg">
                        {build.subject}
                      </div>
                      <div className="col-2 circleci-build-status-label">
                        Status:
                      </div>
                      <div className="col-2">
                        <strong className={statusClass}>{build.status}</strong>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
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
