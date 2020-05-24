import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addNewImgUrlToSlide, addNewImgFileToSlide, removeImgFromSlide } from '../redux/actions';
import './slider.css';

function ImgChooseArea(props) {
	const dispatch = useDispatch();

	const [previewImageUrl, setPreviewImageUrl] = useState();
	const [previewImageFile, setPreviewImageFile] = useState("");

	function onChangePreviewImgHandler(event) {
		  var selectedFile = event.target.files[0];
		  var reader = new FileReader();

		  reader.onload = function(event) {
		    setPreviewImageUrl(event.target.result);
		    dispatch(addNewImgUrlToSlide(event.target.result))
		  };

		  reader.readAsDataURL(selectedFile);
	}

	function onClickRandomImgHandler() {
		const url = `https://source.unsplash.com/random/${Math.ceil(Math.random()*10)}`;
		setPreviewImageUrl(url);
		dispatch(addNewImgUrlToSlide(url))
	}

	function onClickDeleteItemHandler(event) {
		dispatch(removeImgFromSlide(event.target.getAttribute('removeitem')))
	}

	const chosenImgUrlGroup = props.selectedImagesUrl.map(imgUrl => {
		return (
			<div className="col-sm-6 col-md-4 p-0 border preview-item" key={imgUrl}>
				<img src={imgUrl} />
				<button type="button" className="remove-btn btn btn-danger" removeitem={imgUrl} onClick={onClickDeleteItemHandler}>&times;</button>
			</div>
		)
	});

	return (
			<div className="choose-image-area">
				<div className="row mt-2">
					<div className="col pl-0">
						<button type="button" className="btn btn-secondary w-100" onClick={onClickRandomImgHandler}>Random image</button>
					</div>
					<div className="col-sm-6">
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