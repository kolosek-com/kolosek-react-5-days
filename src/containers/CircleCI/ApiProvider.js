import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import './css/ApiProvider.css'

class ApiProvider extends Component {

  state = { 
    input: '',
    redirect: false, 
  }

  handleSave = () => {
    sessionStorage.setItem('CIRCLE_CI_API_KEY', this.state.input)
    this.setState({ redirect: true })
  }

  handleOnChange = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    console.log(this.props.error)
    if(this.state.redirect) return <Redirect to='/' />
    return (
      <div className="api_provider-container">
        <form className="api_provider-form">
          <input className="api_provider-form__input" onChange={this.handleOnChange} placeholder='Please add CircleCI API key' />
          <button className="api_provider-form__button" onClick={this.handleSave}>Save</button>
          <div className="api_provider-form__error">{this.props.error ? 'Authorization failed: Token is not valid!' : ''}</div>
        </form>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    error: state.builds.error,
  };
}

const ApiProvider_Connected = connect(stateToProps)(ApiProvider);

export default ApiProvider_Connected;

