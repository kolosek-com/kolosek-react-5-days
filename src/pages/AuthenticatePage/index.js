import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../reducers/AuthenticationReducer/actions';

import  './styles.css';

class AuthenticatePage extends Component {
  constructor(props) {
    super();
    this.state = { key: '' }
  };

  saveKey = (e) => {
    this.setState({ key: e.target.value });
  };

  authenticate = (e) => {
    e.preventDefault();
    this.props.login(this.state.key);
  };

  render() {
    return (
      this.props.activeSession ? 
        <Redirect to='/' /> : 
        <div className='auth-page'>
          <form onSubmit={this.authenticate}>
            <input name='circle-ci-api-key' 
                   type='text' 
                   value={this.state.key} 
                   placeholder='Circle Ci Api Key' 
                   onChange={this.saveKey}
                   className='key-input' />
            <input className="submit-api-key" type="submit" name="submit" value="Log In" />
          </form>
          <label className="auth-error">{ this.props.error }</label>
        </div>
    );
  };
};

const stateToProps = (state) => {
  return {
    error: state.auth.error,
    activeSession: state.auth.activeSession
  };
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ login }, dispatch);
};

const AuthenticatePage_Connected = connect(stateToProps, dispatchToProps)(AuthenticatePage);
export default AuthenticatePage_Connected;