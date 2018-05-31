import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import SingleBuild from '../../components/SingleBuild'

import {
  getBuildList,
  selectBuild,
} from '../../reducers/CircleCIReducer/actions';

import './css/List.css'

class List extends Component {

  state = { 
    redirect: false, 
  }

  componentDidMount() {
    const apiKey = sessionStorage.getItem('CIRCLE_CI_API_KEY');
    apiKey ? this.props.getBuildList(apiKey) : this.setState({redirect: true})
  }

  selectBuild = (build) => () => {
    this.props.selectBuild(build);
  }

  render() {
    if(this.state.redirect || this.props.error) return <Redirect to='/api_key' />
    return (
      <div className="builds_container">
        { this.props.dataFetched ? 
          <div>
            <h1 className="builds_container__header">Circle CI</h1>
            { this.renderLatestBuilds() }
          </div> :
          <div>Loading data...</div>
        }
      </div>
    );
  }

  renderLatestBuilds() {
    return (
      <div>
        <h2>Latest builds</h2>
        {
          this.props.list.map(build => {
            return (
              <SingleBuild 
                key={build.build_num} 
                build={build} 
                onClick={this.selectBuild(build)}
              />)
          })
        }
      </div>
    )
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
    selectBuild,
  }, dispatch);
}

const List_Connected = connect(stateToProps, dispatchToProps)(List);

export default List_Connected;
