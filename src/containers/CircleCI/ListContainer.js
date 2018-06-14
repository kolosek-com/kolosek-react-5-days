import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import List from './List'

import {
  getBuildList,
} from '../../reducers/CircleCIReducer/actions';

class ListContainer extends Component {

  state = { 
    redirect: false,
  }

  componentDidMount() {
    const apiKey = sessionStorage.getItem('CIRCLE_CI_API_KEY');
    apiKey ? this.props.getBuildList(apiKey) : this.setState({redirect: true})
  }

  render() {
    if(this.state.redirect || this.props.error) return <Redirect to='/api_key' />
    return <List 
             list={this.props.list}
             dataFetched={this.props.dataFetched}
             selectBuild={this.props.selectBuild}
           />
  }
}

function stateToProps(state) {
  return {
    list: state.builds.buildsList,
    dataFetched: state.builds.dataFetched,
    error: state.builds.error,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getBuildList,
  }, dispatch);
}

const ListContainerConnected = connect(stateToProps, dispatchToProps)(ListContainer);

export default ListContainerConnected;
