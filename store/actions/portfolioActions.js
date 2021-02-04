// -----------------------------------------------
//
// store -> projectActions.js
// Desc: Actions for projects. They help us get the data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as portfolioTypes from '../types/portfolioTypes';
// -----------------------------------------------

export const storePortfolioData = (data, storeType) => (dispatch) => {
	let type;
	let message;
	let objName;

	if (storeType === 'projects') {
		type = portfolioTypes.STORE_PROJECTS_DATA;
		message = 'Projects Data Successfuly Stored!';
		objName = 'projectsData';
	} else if (storeType === 'education') {
		type = portfolioTypes.STORE_EDUCATION_DATA;
		message = 'Education Data Successfuly Stored!';
		objName = 'educationData';
	} else if (storeType === 'work') {
		type = portfolioTypes.STORE_WORK_DATA;
		message = 'Work Data Successfuly Stored!';
		objName = 'workData';
	}

	dispatch({
		type: type,
		payload: {
			message: message,
			[objName]: data
		}
	});
};

// export const storeProjectsData = (projectsData) => (dispatch) => {
// 	dispatch({
// 		type: portfolioTypes.STORE_PROJECTS_DATA,
// 		payload: {
// 			message: 'Projects Data Successfuly Stored!',
// 			projectsData: projectsData
// 		}
// 	});
// };

// export const storeEducationData = (educationData) => (dispatch) => {
// 	dispatch({
// 		type: portfolioTypes.STORE_EDUCATION_DATA,
// 		payload: {
// 			message: 'Education Data Successfuly Stored!',
// 			educationData: educationData
// 		}
// 	});
// };

// export const storeWorkData = (workData) => (dispatch) => {
// 	dispatch({
// 		type: portfolioTypes.STORE_WORK_DATA,
// 		payload: {
// 			message: 'Work Data Successfuly Stored!',
// 			workData: workData
// 		}
// 	});
// };
