import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

export class BuildPage extends Component {
  render() {
    const { selectedBuild } = this.props

    if (!selectedBuild) {
      this.props.history.push('/')
    }

    return (
      <div>
        <h1>CircleCI</h1>

        <h3>Build no #{selectedBuild.build_num}</h3>
        <p>Project name: {selectedBuild.reponame}</p>
        <p>Branch name: {selectedBuild.branch}</p>
        <p>Status: {selectedBuild.status}</p>
        <p>Commit message: </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedBuild: state.builds.selectedBuild
})

export default withRouter(connect(mapStateToProps)(BuildPage))