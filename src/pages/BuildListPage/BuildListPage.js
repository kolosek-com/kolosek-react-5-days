import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import {
  getCircleciBuilds,
  selectBuild
} from '../../reducers/CircleciReducer/actions';
import AuthPage from '../AuthPage/AuthPage'
import BuildListComponent from '../../components/BuildListComponent/BuildListComponent'

export class BuildListPage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getCircleciBuilds();
    }
  }

  createBuildObject = (id, build_num, branch, reponame, added_at, status) => {
    return {
      id,
      build_num,
      branch,
      reponame,
      added_at,
      status
    }
  }

  handleBuilds = () => {    
    const buildsArr = []

    this.props.builds.map((build, index) => {
      var branchesObj = build.branches 

      return Object.keys(branchesObj).map(key => {
        return branchesObj[key].recent_builds.map(recent => {
          var buildObj = this.createBuildObject(recent.vcs_revision, recent.build_num, key, build.reponame, recent.added_at, recent.status)

          buildsArr.push(buildObj)
        })
      })
    })
    
    return buildsArr
  }

  handleUnauthenticated = () => {
    return <Redirect to="/auth" />
  }

  isAuthenticated = () => {
    return this.props.isAuthenticated
  }

  handleBuildClick = (build) => {
    this.props.selectBuild(build)
  }

  render() {
    if (!this.isAuthenticated()) {
      return this.handleUnauthenticated()
    }

    return (  
      <div>
        <h1>CircleCI</h1>
        <h2>Latest Builds</h2>
        <BuildListComponent builds={this.handleBuilds()} onClickHandler={this.handleBuildClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  builds: state.builds.buildList,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCircleciBuilds,
    selectBuild
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildListPage)
