import React, { Component } from 'react';
import InputField from './components/InputField'
import SubmitButton from './components/SubmitButton'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      agreeWithTerms: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toogleAgreeWithTerms = () => {
    this.setState(function(prevState, props){
      return { agreeWithTerms: !prevState.agreeWithTerms }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField 
          type="email" 
          name="email" 
          label="Email:" 
          input={this.state.email} 
          onChange={this.handleInputChange} 
        />
        <InputField 
          type="text" 
          name="firstName" 
          label="FirstName:" 
          input={this.state.firstName} 
          onChange={this.handleInputChange} 
        />
        <InputField 
          type="text" 
          name="lastName" 
          label="LastName:" 
          input={this.state.lastName} 
          onChange={this.handleInputChange} 
        />
        <InputField 
          type="password"
          name="password" 
          label="Password:" 
          input={this.state.password} 
          onChange={this.handleInputChange} 
        />
        <InputField 
          type="checkbox" 
          name="agreeWithTerms" 
          label="Agree with terms:" 
          input={this.state.agreeWithTerms} 
          onChange={this.toogleAgreeWithTerms} 
        />
        <SubmitButton />
      </form>
    );
  }
}

export default SignupForm;
