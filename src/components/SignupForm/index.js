import React, { Component } from 'react';
import { CheckBox, TextInput, EmailInput, PasswordInput, SubmitButton } from '../FormComponents';

class SignupForm extends Component {

  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeWithTerms: false
    };
  }

  updateAgreement = (e) => {
    this.setState((prevState) => {
      return { agreeWithTerms: !prevState.agreeWithTerms }
    })
  }

  formInputOnChange = (e)  => {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  }

  signUp = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.signUp}>
        <TextInput
          name="firstName"
          value={this.state.firstName}
          onChange={this.formInputOnChange} />
        <TextInput
          name="lastName"
          value={this.state.lastName}
          onChange={this.formInputOnChange} />
        <EmailInput
          name="email"
          value={this.state.email}
          onChange={this.formInputOnChange} />
        <PasswordInput
          name="password"
          value={this.state.password}
          onChange={this.formInputOnChange} />
        <CheckBox 
          name="agreeWithTerms"
          checked={this.state.agreeWithTerms}
          onChange={this.updateAgreement} />
        <SubmitButton value="Signup" disabled={!this.state.agreeWithTerms} />
      </form>
    );
  }
};

export default SignupForm;
