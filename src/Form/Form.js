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
      checked: false
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCheckChange = (event) => {
    this.setState((previousState, currentProps) => {
      return {
        checked: !previousState.checked
      }
    })
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
                 name='email'
                 value={this.state.email}
                 onChangeValue={this.handleChange} />

          <Input placeholder='first name'
                 name='first'
                 value={this.state.first}
                 onChangeValue={this.handleChange} />

          <Input placeholder='last name'
                 name='last'
                 value={this.state.last}
                 onChangeValue={this.handleChange}  />

          <Input placeholder='password'
                 name='password'
                 value={this.state.password}
                 onChangeValue={this.handleChange}  />

          <Checkbox checked={this.state.checked}
                    onChangeValue={this.handleCheckChange}/>

        
        <input type="submit" 
               value="Submit"
               className="submit-btn" />

      </form>
    );
  }
}

export default Form;