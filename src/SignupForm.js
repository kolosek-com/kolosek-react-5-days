import React, { Component } from 'react';

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

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toogleAgreeWithTerms = this.toogleAgreeWithTerms.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  toogleAgreeWithTerms() {
    this.setState({ agreeWithTerms: !this.state.agreeWithTerms })
  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Email:
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
        </div>
        <div>
          <label>
            First name:
            <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <label>
            Agree with terms:
            <input type="checkbox" value={this.state.agreeWithTerms} onChange={this.toogleAgreeWithTerms} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;