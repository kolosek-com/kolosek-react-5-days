import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  selectBranch,
} from '../../reducers/ProjectReducer/actions';

class BranchSelect extends Component {
  handleChange = (event) => {
    this.props.selectBranch(event.target.value);
    this.props.onSelect(event.target.value);
  }

  render() {
    return (
      <select value={this.props.selectedBranch} onChange={this.handleChange} disabled={!this.props.selectedProject}>
        <option value="">Select branch...</option>
        {
          this.props.selectedProject ?
            Object.keys(this.props.selectedProject.branches).map((branch, index) => {
              return (
                <option key={`project_${this.props.selectedProject.reponame}_branch_${branch}`} value={branch}>{branch}</option>
              );
            })
            :
            ''
        }
      </select>
    );
  }
}

function stateToProps(state) {
  return {
    selectedProject: state.projects.selectedProject,
    selectedBranch: state.projects.selectedBranch,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    selectBranch,
  }, dispatch);
}

const BranchSelect_Connected = connect(stateToProps, dispatchToProps)(BranchSelect);

export default BranchSelect_Connected;
