import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      tos: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log('Email: ', this.state.email);
    console.log('First name: ', this.state.first_name);
    console.log('Last Name: ', this.state.last_name);
    console.log('Password: ', this.state.password);
    console.log('TOS: ', this.state.tos);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput label="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
        <TextInput label="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
        <TextInput label="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
        <PasswordInput label="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <CheckboxInput label="I accept the Terms Of Service" name="tos" checked={this.state.tos} onChange={this.handleChange}/>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;
