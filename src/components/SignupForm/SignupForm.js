import React, { Component } from 'react';
import Checkbox from '../Elements/Checkbox';
import TextInput from '../Elements/TextInput';
import Password from '../Elements/Password';

class SignupForm extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      terms: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submit = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.firstName, this.state.lastName, this.state.password, this.state.terms)
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <TextInput 
          name="email" 
          value={this.state.email} 
          onChange={this.handleChange}/>
        <TextInput 
          name="firstName" 
          value={this.state.firstName} 
          onChange={this.handleChange}/>
        <TextInput 
          name="lastName" 
          value={this.state.lastName} 
          onChange={this.handleChange}/>
        <Password 
          name="password" 
          value={this.state.password} 
          onChange={this.handleChange}/>
        <Checkbox 
          name="terms"
          checked={this.state.terms} 
          onChange={this.handleChange}/>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;
