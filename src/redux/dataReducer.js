import { ADD_NEW_COLOR, ADD_NEW_IMG_URL, ADD_NEW_IMG_FILE, ADD_NEW_ITEM, REMOVE_COLOR, REMOVE_IMG, REMOVE_ITEM } from './types';

const initialState = {
	selectedColors: [],
	selectedImagesUrl: [],
	selectedImagesFiles: [],
	itemsToShow: []
}

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NEW_COLOR:
			return {...state, selectedColors: [...state.selectedColors, action.newColor]}
		case ADD_NEW_IMG_URL:
			return {...state, selectedImagesUrl: [...state.selectedImagesUrl, action.newImgUrl]}
		case ADD_NEW_IMG_FILE:
			return {...state, selectedImagesFiles: [...state.selectedImagesFiles, action.newImgFile]}
		case ADD_NEW_ITEM:
			return {...state, itemsToShow: [...state.itemsToShow, action.newItem]}
		case REMOVE_COLOR:
			return {...state, selectedColors: state.selectedColors.filter(item => item !== action.color)}
		case REMOVE_IMG:
			return {...state, selectedImagesUrl: state.selectedImagesUrl.filter(item => item !== action.imgUrl)}
		case REMOVE_ITEM:
			return {...state, itemsToShow: state.itemsToShow.filter(item => item !== action.item)}																		
		default: return state
	}
}

export default dataReducer