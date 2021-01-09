import axios from 'axios';
import { tokenize, errorHandler } from './general';
import * as selfEnrollmentFlowTypes from '../types/selfEnrollmentFlowTypes';

// const API_URL = process.env.API_URL;
const API_URL = 'http://localhost:4000/api';
// const GENERAL_CLIENT_URL = process.env.API_URL + '/client/general';
const GENERAL_CLIENT_URL = API_URL + '/client/general';

export const storeSelfEnrollmentFlowInfo = (selfEnrollmentFlowInfo) => async (
	dispatch
) => {
	dispatch({
		type: selfEnrollmentFlowTypes.STORE_SLR_FLOW_INFO_SUCCESS,
		payload: {
			message: 'Self Enrollment Flow Info Saved!',
			selfEnrollmentFlowInfo: selfEnrollmentFlowInfo
		}
	});
};

export const getSavingsChartInfo = () => async (dispatch) => {
	const protectedData = tokenize();

	try {
		const response = await axios.post(
			`${GENERAL_CLIENT_URL}/getSavingsChartInfo`,
			protectedData
		);
	
		if (response.data.success) {
			dispatch({
				type: selfEnrollmentFlowTypes.GET_SAVINGS_CHART_INFO_SUCCESS,
				payload: {
					message: response.data.message,
					savingsChartInfo: response.data.savingsChartInfo
				}
			});
		} else {
			dispatch({
				type: selfEnrollmentFlowTypes.SELF_ENROLLMENT_ERROR,
				payload: { message: response.data.message }
			});
		}
	} catch (error) {
		console.log('What is error');
		console.log(error);
		// errorHandler(dispatch, error, types.SELF_ENROLLMENT_ERROR);
	}
};
// Using a function for the dispatching. Here we use the function called reusableExampleFunction
// This idea might be useful when we do something over and over again
// ------------------------------------------------
// export const exampleActionFunction = () => async (dispatch) => {
// 	const res = await axios.get('https://api.mocki.io/v1/ff1afe4a');
// 	dispatch(reusableExampleFunction(res));
// };
