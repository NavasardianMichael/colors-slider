import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import ColorItemToChoose from './ColorItemToChoose';
import { addNewColorToSlide, removeColorFromSlide } from '../redux/actions';

function ColorChooseArea(props) {
	const dispatch = useDispatch();
	const [currentColor, setCurrentColor] = useState('');

	function addColorHandler(event) {
		setCurrentColor(event.target.value);
		dispatch(addNewColorToSlide(event.target.value))
	}

	function onClickDeleteItemHandler(event) {
		dispatch(removeColorFromSlide(event.target.getAttribute('removeitem')))
	}	

	const chosenColors = props.selectedColors.map(color => {
		return (
			<div className="col-sm-6 col-md-3 border p-0 preview-item" key={color}>
				<div style={{backgroundColor: color, height: 100}} />
				<button type="button" removeitem={color} className="remove-btn btn btn-danger" onClick={onClickDeleteItemHandler}>&times;</button>
			</div>
		)
	})

	return (
			<div className="choose-color-area">
				  <div className="form-group row">
				    	<div className="col-md-3 my-auto">
				    		<label>Choose color: </label>
				    	</div>
				    	<div className="col">
				    		<input className="form-control" type="color" value={currentColor} onChange={addColorHandler}/>
				    	</div>
				  </div>
				  <div className="chosen-colors">
				  	<div className="row">
				  		{chosenColors}
				  	</div>
				  </div>
			</div>		
	)
};

const mapStateToProps = state => ({selectedColors: state.data.selectedColors})

export default connect(mapStateToProps, null)(ColorChooseArea)