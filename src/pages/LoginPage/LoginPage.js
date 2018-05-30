import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './LoginPage.css';

import {
  setApiKey,
} from '../../reducers/ApiKeyReducer/actions';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      apiKey: '',
    };
  }

  onChange = (event) => {
    this.setState({ apiKey: event.target.value });
  }

  setKey = () => {
    this.props.setApiKey(this.state.apiKey);
    console.log(this.state);
  }

  render() {
    if (this.props.apiKey) {
      return (
        <Redirect
          to='/'
        />
      )
    }
    return (
      <div className="circle-ci-login">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Circle CI</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Enter API key</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input value={this.state.apiKey} onChange={this.onChange} />
            <button onClick={this.setKey}>Set Key</button>
          </div>
        </div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    apiKey: state.apiKey.currentKey,
  };
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    setApiKey,
  }, dispatch);
}

const LoginPage_Connected = connect(stateToProps, dispatchToProps)(LoginPage);

export default LoginPage_Connected;
