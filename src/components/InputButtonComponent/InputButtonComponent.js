import React from 'react';
import './InputButtonComponent.css';

function InputButtonComponent (props) {
	return (
		<div>
			<input
				type={ props.type }
				value={ props.value }
				className={ props.className } />
		</div>
	);
}

export default InputButtonComponent;
