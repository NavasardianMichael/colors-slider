import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNewImgUrlToSlide, removeImgFromSlide } from '../redux/actions';
import './slider.css';

function ImgChooseArea(props) {
	const dispatch = useDispatch();

	function onChangePreviewImgHandler(event) {
		  var selectedFile = event.target.files[0];
		  var reader = new FileReader();

		  reader.onload = function(event) {
		    dispatch(addNewImgUrlToSlide(event.target.result, 'file'))
		  };

		  reader.readAsDataURL(selectedFile);
	}

	function onClickRandomImgHandler() {
		dispatch(addNewImgUrlToSlide(null, 'url'))
	}

	function onClickDeleteItemHandler(event) {
		dispatch(removeImgFromSlide(event.target.getAttribute('removeitem')))
	}

	const chosenImgUrlGroup = props.selectedImagesUrl.map(imgUrl => {
		return (
			<div className="col-sm-6 col-md-4 p-0 border preview-item" key={imgUrl}>
				<img src={imgUrl} alt={imgUrl}/>
				<button type="button" className="remove-btn btn btn-danger" removeitem={imgUrl} onClick={onClickDeleteItemHandler}>&times;</button>
			</div>
		)
	});

	return (
			<div className="choose-image-area">
				<div className="row mt-2">
					<div className="col my-2">
						<button type="button" className="btn btn-secondary w-100" onClick={onClickRandomImgHandler}>Random image</button>
					</div>
					<div className="col-sm-6 my-2">
						<input type="file" className="custom-file-input" id="inputFile" accept="image/jpeg, image/png" onChange={onChangePreviewImgHandler}/>
    					<label className="custom-file-label m-0" htmlFor="inputFile">Upload</label>	
					</div>					
				</div>
				<div className="row mt-2">
					{chosenImgUrlGroup}
				</div>		
			</div>		
	)
};

const mapStateToProps = state => ({ selectedImagesUrl: state.data.selectedImagesUrl })

export default connect(mapStateToProps, null)(ImgChooseArea)