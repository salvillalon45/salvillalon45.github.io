import * as projectsTypes from '../types/projectsTypes';

const initialState = {
	isLoading: false,
	message: '',
	gitHubReposData: null,
};

const projectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case projectsTypes.STORE_GITHUB_REPOS:
			return {
				...state,
				message: action.payload.message,
				gitHubReposData: action.payload.gitHubReposData,
			};

		case projectsTypes.PROJECTS_ERROR:
			return {
				...state,
				message: action.payload.message,
			};

		// case selfEnrollmentFlowTypes.GET_SAVINGS_CHART_INFO_SUCCESS:
		// 	return {
		// 		...state,
		// 		message: action.payload.message,
		// 		savingsChartInfo: action.payload.savingsChartInfo,
		// 	};

		default:
			return state;
	}
};

export default projectsReducer;
