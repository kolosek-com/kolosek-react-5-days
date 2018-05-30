import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getProjectList,
  selectProject,
} from '../../reducers/ProjectReducer/actions';

class ProjectSelect extends Component {
  componentDidMount() {
    if (this.props.apiKey) this.props.getProjectList(this.props.apiKey);
  }

  handleChange = (event) => {
    var project = this.props.projects.find((e) => e.reponame === event.target.value);
    this.props.selectProject(project);
    this.props.onSelect(project);
  }

  render() {
    var selected = this.props.selectedProject ? this.props.selectedProject.reponame : '';
    return (
      <select value={selected} onChange={this.handleChange}>
        <option value="">Select project...</option>
        {
          this.props.projects.map((project, index) => {
            return (
              <option key={`project_${project.reponame}`} value={project.reponame}>{project.reponame}</option>
            );
          })
        }
      </select>
    );
  }
}

function stateToProps(state) {
  return {
    apiKey: state.apiKey.currentKey,
    projects: state.projects.projectList,
    selectedProject: state.projects.selectedProject,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getProjectList,
    selectProject,
  }, dispatch);
}

const ProjectSelect_Connected = connect(stateToProps, dispatchToProps)(ProjectSelect);

export default ProjectSelect_Connected;
