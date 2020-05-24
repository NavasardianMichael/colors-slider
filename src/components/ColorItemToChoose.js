import React from 'react';

function ColorItemToChoose(props) {
	return (
		<option style={{backgroundColor: props.color.name}}></option>
	)
}

export default ColorItemToChoose