import React from 'react';


function InputFieldComponent (props) {
	return (
		<div>
		<label> {props.label}</label>
		<input type={ props.type }
			value={ props.value }
			name={ props.name }
			onChange={ props.handleChange } />
		</div>
	);
}

export default InputFieldComponent;