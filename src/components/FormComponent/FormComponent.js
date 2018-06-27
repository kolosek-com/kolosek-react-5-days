import React, { Component } from 'react';
import InputFieldComponent from '../InputFieldComponent/InputFieldComponent';
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

	handleInput = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
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
				<form onSubmit={this.handleSubmit}>
					<InputFieldComponent 
						name="firstName"
						value={ this.state.firstName } 
						type="text"
						label="First name"
						handleChange={ this.handleInput } />
					<InputFieldComponent 
						name="lastName"
						value={this.state.lastName} 
						type="text"
						label="Last name"
						handleChange={ this.handleInput } />
					<InputFieldComponent 
						name="password"
						value={ this.state.password }
						type="password"
						label="Password"
						handleChange={ this.handleInput } />
					<InputFieldComponent 
						name="email"
						value={ this.state.email } 
						type="email"
						label="Email"
						handleChange={ this.handleInput } />
					<label> Agreement</label>
					<input
						name="checkbox"
						type="checkbox"
		        checked={ this.state.checkbox }
		        onChange={ this.handleInput }
						className="form-checkbox-style" />
					<input type="submit" value="Submit" class="form-submit-style" />
			</form>
		</div>	
		);
	}
}

export default FormComponent;