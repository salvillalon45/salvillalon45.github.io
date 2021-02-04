// -----------------------------------------------
//
// store -> reducer.js
// Desc: To Help us reduce the actions
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as portfolioTypes from '../types/portfolioTypes';
// -----------------------------------------------

const initialState = {
	isLoading: false,
	message: '',
	projectsData: null,
	educationData: null,
	workData: null
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case portfolioTypes.STORE_PROJECTS_DATA:
			return {
				...state,
				message: action.payload.message,
				projectsData: action.payload.projectsData
			};

		case portfolioTypes.STORE_EDUCATION_DATA:
			return {
				...state,
				message: action.payload.message,
				educationData: action.payload.educationData
			};

		case portfolioTypes.STORE_WORK_DATA:
			return {
				...state,
				message: action.payload.message,
				workData: action.payload.workData
			};

		case portfolioTypes.PROJECTS_ERROR:
			return {
				...state,
				message: action.payload.message
			};

		default:
			return state;
	}
};

export default projectsReducer;
