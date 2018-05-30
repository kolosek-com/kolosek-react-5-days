import React, {Component} from 'react';
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
    if(this.state.redirect) return <Redirect to='/' />
    return (
      <div className="api_provider-container">
        <form className="api_provider-form">
          <input className="api_provider-form__input" onChange={this.handleOnChange} placeholder='Please add CircleCI API key' />
          <button className="api_provider-form__button" onClick={this.handleSave}>Save</button>
        </form>
      </div>
    );
  }
}

export default ApiProvider;
