import React from 'react';

function InputFieldComponent (props) {
	return (
		<div>
			<input
        type={props.type}
        name={props.name}
				value={props.value}
        placeholder={props.placeholder}
				onChange={props.change}
				className={props.className}
      />
		</div>
	);
}

export default InputFieldComponent;
