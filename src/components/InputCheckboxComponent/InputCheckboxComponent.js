import React from 'react';
import './InputCheckboxComponent.css';

function InputCheckboxComponent (props) {
	return (
		<div>
			<label>{ props.label }</label>
			<input
				type={ props.type }
				value={ props.value }
				name={ props.name }
				checked={ props.checked }
				onChange={ props.handleChange }
				className={ props.className } />
		</div>
	);
}
	export default InputCheckboxComponent;
