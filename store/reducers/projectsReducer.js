// -----------------------------------------------
//
// store -> reducer.js
// Desc: To Help us reduce the actions
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as projectsTypes from '../types/projectsTypes';
import * as educationTypes from '../types/educationTypes';
// -----------------------------------------------

const initialState = {
	isLoading: false,
	message: '',
	projectsData: null,
	educationData: null
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case projectsTypes.STORE_PROJECTS_DATA:
			return {
				...state,
				message: action.payload.message,
				projectsData: action.payload.projectsData
			};

		case educationTypes.STORE_EDUCATION_DATA:
			return {
				...state,
				message: action.payload.message,
				educationData: action.payload.educationData
			};

		case projectsTypes.PROJECTS_ERROR:
			return {
				...state,
				message: action.payload.message
			};

		default:
			return state;
	}
};

export default projectsReducer;
