import { ADD_NEW_COLOR, ADD_NEW_IMG_URL, ADD_NEW_ITEM, REMOVE_COLOR, REMOVE_IMG, REMOVE_ITEM } from './types';

export function addNewItemToSlide(newItem) {
	return {
		type: ADD_NEW_ITEM,
		newItem
	}
}

export function addNewColor(newColor) {
	return {
		type: ADD_NEW_COLOR,
		newColor
	}
}

export function addNewImgUrl(newImgUrl) {
	return {
		type: ADD_NEW_IMG_URL,
		newImgUrl
	}
}

export function removeColor(color) {
	return {
		type: REMOVE_COLOR,
		color
	}
}

export function removeImg(imgUrl) {
	return {
		type: REMOVE_IMG,
		imgUrl
	}
}

export function removeItemFromSlide(item) {
	return {
		type: REMOVE_ITEM,
		item
	}
}


export function addNewColorToSlide(newColor) {
	return function(dispatch) {
		dispatch(addNewColor(newColor));
		dispatch(addNewItemToSlide(newColor));
	}
}

export function addNewImgUrlToSlide(newImgUrl, imgType) {
	return function(dispatch) {
		if (imgType === 'file') {
			dispatch(addNewImgUrl(newImgUrl));
			dispatch(addNewItemToSlide(newImgUrl));			
		} else if(imgType === 'url') {
			var url = `https://source.unsplash.com/random/${Math.ceil(Math.random()*10)}`;
			dispatch(addNewImgUrl(url));
			dispatch(addNewItemToSlide(url));
		}
	}
}

// export function addNewImgFileToSlide(newImgFile) {
// 	return function(dispatch) {
// 		dispatch(addNewImgFile(newImgFile));
// 		dispatch(addNewItemToSlide(newImgFile));
// 	}
// }

export function removeColorFromSlide(color) {
	return function(dispatch) {
		dispatch(removeColor(color));
		dispatch(removeItemFromSlide(color));
	}
}

export function removeImgFromSlide(imgUrl) {
	return function(dispatch) {
		dispatch(removeImg(imgUrl));
		dispatch(removeItemFromSlide(imgUrl));
	}
}