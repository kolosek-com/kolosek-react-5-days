import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import moment from 'moment'
import uuidv1 from 'uuid'

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
    this.props.getBuildList(apiKey);
    this.setState({redirect: !apiKey});
  }

  selectBuild = (build) => () => {
    this.props.selectBuild(build);
  }

  render() {
    if(this.state.redirect) return <Redirect to='/api_key' />
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
            return this.renderSingleBuild(build)
          })
        }
      </div>
    )
  }

  renderSingleBuild(build) {
    return (
      <div key={uuidv1()} className="single-build">
        <div className="single_build-top_content">
          <Link
            onClick={this.selectBuild(build)}
            to={`/build/${build.build_num}`}
          >
            <div>{build.branch} / {build.reponame} # {build.build_num}</div>
          </Link>
          <div className="top-content__time">{moment(build.stop_time).fromNow()}</div>
        </div>
        <div className="single_build-bottom_content">
          <div>{build.subject}</div>
          <div>Status: {build.status}</div>
        </div>
      </div>
    )
  }
}

function stateToProps(state) {
  return {
    list: state.builds.buildsList,
    dataFetched: state.builds.dataFetched,
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

