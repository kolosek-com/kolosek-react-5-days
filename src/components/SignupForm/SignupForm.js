import React, { Component } from 'react'
import TextInput from '../FormComponents/TextInput'
import EmailInput from '../FormComponents/EmailInput'
import CheckboxInput from '../FormComponents/CheckboxInput'

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      agree: false
    }
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    let newState = {};

    newState[target.name] = value;

    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)

    this.setState({
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      agree: false
    })
  }

  render () {
    var divStyle = {
      marginBottom: "10px"
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Signup Form</h2>

          <EmailInput 
            name='email' 
            onChangeHandler={this.handleChange} 
            value={this.state.email} 
            placeholder="Email..."
            style={divStyle} />

          <TextInput 
            name='first_name' 
            onChangeHandler={this.handleChange} 
            value={this.state.first_name} 
            placeholder="First name..."
            style={divStyle} />

          <TextInput 
            name='last_name' 
            onChangeHandler={this.handleChange} 
            value={this.state.last_name} 
            placeholder="Last name..."
            style={divStyle} />

          <TextInput 
            name='password' 
            onChangeHandler={this.handleChange} 
            value={this.state.password} 
            placeholder="Password..."
            style={divStyle} 
            type="password" />

          <CheckboxInput 
            id="agree" 
            labelText="Agree" 
            name="agree" 
            onChangeHandler={this.handleChange}
            checked={this.state.agree} 
            style={divStyle} />

          <input type='submit' placeholder='Submit' value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignupForm