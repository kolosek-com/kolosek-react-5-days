import React, { Component } from 'react';
import InputFieldComponent from '../InputFieldComponent/InputFieldComponent';
import InputCheckboxComponent from '../InputCheckboxComponent/InputCheckboxComponent';
import InputButtonComponent from '../InputButtonComponent/InputButtonComponent';
import "./FormComponent.css";

class FormComponent extends Component {
	constructor() {
		super();
		this.state = {
			checkbox: false,
			email: '',
			firstName: '',
			lastName: '',
			password: '',
		}
	}

	handleCheckbox = (e) => {
		const target = e.target;
		const value = target.checked;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleInput = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = (e)  => {
		e.preventDefault();
		console.log('Name is: ' + this.state.firstName);
		console.log('Last Name is: ' + this.state.lastName);
		console.log('Password is: ' + this.state.password);
		console.log('Checkbox is: ' + this.state.checkbox);
	}

	render () {
		return (
			<div className="form-style">
				<form onSubmit={ this.handleSubmit }>
					<InputFieldComponent
						name="firstName"
						value={ this.state.firstName }
						type="text"
						label="First name"
						handleChange={ this.handleInput }
						className="form-input" />
					<InputFieldComponent
						name="lastName"
						value={ this.state.lastName }
						type="text"
						label="Last name"
						handleChange={ this.handleInput }
						className="form-input"/>
					<InputFieldComponent
						name="password"
						value={ this.state.password }
						type="password"
						label="Password"
						handleChange={ this.handleInput }
						className="form-input" />
					<InputFieldComponent
						name="email"
						value={ this.state.email }
						type="email"
						label="Email"
						handleChange={ this.handleInput }
						className="form-input" />
					<InputCheckboxComponent
						name="checkbox"
						type="checkbox"
						label="Agreement"
		        checked={ this.state.checkbox }
		        handleChange={ this.handleCheckbox }
		        className="form-checkbox" />
		      <InputButtonComponent
		      	type="submit"
		      	value="Submit"
		      	className="form-submit"/>
				</form>
			</div>
		);
	}
}

export default FormComponent;
