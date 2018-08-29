import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import {
  getCircleciBuilds,
  selectBuild
} from '../../reducers/CircleciReducer/actions';
import AuthPage from '../AuthPage/AuthPage'

class BuildListPage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getCircleciBuilds();
    }
  }

  selectBuild = (build) => () => {
    this.props.selectBuild(build)
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

  renderBuilds = () => {
    return (      
      this.props.builds.map((build, index) => {
        var branchesObj = build.branches 

        return Object.keys(branchesObj).map(key => {
          return branchesObj[key].recent_builds.map(recent => {
            var buildObj = this.createBuildObject(recent.vcs_revision, recent.build_num, key, build.reponame, recent.added_at, recent.status)

            return (
              <div>
                <Link
                  key={buildObj.id}
                  onClick={this.selectBuild(buildObj)}
                  to={`/build/${buildObj.id}`}
                >
                  <h3>{buildObj.branch} / {buildObj.reponame} #{buildObj.build_num} {buildObj.added_at} time ago</h3>
                  <p>Status: {buildObj.status}</p>
                </Link>
              </div>
            )
          })
        })
      })
    )
  }

  handleUnauthenticated = () => {
    return (
      <Redirect
        to='/auth'
      />
    )
  }

  isAuthenticated = () => {
    return this.props.isAuthenticated
  }

  render() {
    if (!this.isAuthenticated()) {
      return this.handleUnauthenticated()
    }

    return (  
      <div>
        <h1>CircleCI</h1>
        <h2>Latest Builds</h2>
        
        {
          this.renderBuilds()
        }
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
