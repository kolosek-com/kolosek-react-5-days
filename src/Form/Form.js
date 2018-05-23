import React, { Component } from 'react';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import '../style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      password: '',
      checked: true
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleFirstChange = (event) => {
    this.setState({first: event.target.value});
  }

  handleLastChange = (event) => {
    this.setState({last: event.target.value});
  }

  handlePassChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleCheckChange = (event) => {
    if (this.state.checked) {
        this.setState({checked: !event.target.checked})
        return (
          checked: checked
        )
    }
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.first, this.state.last, this.state.password, this.state.checked)
  }

  render () {
    return (
      <form className="form"
            onSubmit={this.formSubmitHandler}>

          <Input placeholder='email'
                 value={this.state.email}
                 onChangeValue={this.handleEmailChange} />

          <Input placeholder='first name'
                 value={this.state.first}
                 onChangeValue={this.handleFirstChange} />

          <Input placeholder='last name'
                 value={this.state.last}
                 onChangeValue={this.handleLastChange}  />

          <Input placeholder='password'
                 value={this.state.password}
                 onChangeValue={this.handlePassChange}  />

          <Checkbox onChangeValue={this.handleCheckChange}/>

        
        <input type="submit" 
               value="Submit"
               className="submit-btn" />

      </form>
    );
  }
}

export default Form;