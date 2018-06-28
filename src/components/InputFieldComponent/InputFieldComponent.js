import React from 'react';
import './InputFieldComponent.css'

function InputFieldComponent (props) {
	return (
		<div>
			<label>{ props.label }</label>
			<input
				type={ props.type }
				value={ props.value }
				name={ props.name }
				onChange={ props.handleChange }
				className={ props.className } />
		</div>
	);
}

export default InputFieldComponent;
