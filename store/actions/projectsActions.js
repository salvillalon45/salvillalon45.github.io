// -----------------------------------------------
//
// store -> projectActions.js
// Desc: Actions for projects. They help us get the data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as projectsTypes from '../types/projectsTypes';
import * as educationTypes from '../types/educationTypes';
// -----------------------------------------------

export const storeProjectsData = (projectsData) => (dispatch) => {
	dispatch({
		type: projectsTypes.STORE_PROJECTS_DATA,
		payload: {
			message: 'Projects Data Successfuly Stored!',
			projectsData: projectsData
		}
	});
};

export const storeEducationData = (educationData) => (dispatch) => {
	dispatch({
		type: educationTypes.STORE_EDUCATION_DATA,
		payload: {
			message: 'Education Data Successfuly Stored!',
			educationData: educationData
		}
	});
};
