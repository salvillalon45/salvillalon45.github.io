import * as selfEnrollmentFlowTypes from '../types/selfEnrollmentFlowTypes';

const initialState = {
	isLoading: false,
	message: '',
	selfEnrollmentFlowInfo: {},
	savingsChartInfo: {}
};

const selfEnrollmentFlowReducer = (state = initialState, action) => {
	switch (action.type) {
		case selfEnrollmentFlowTypes.STORE_SLR_FLOW_INFO_SUCCESS:
			const selfEnrollmentFlowInfo = Object.assign(
				state.selfEnrollmentFlowInfo,
				action.payload.selfEnrollmentFlowInfo
			);
			return {
				...state,
				message: action.payload.message,
				selfEnrollmentFlowInfo: selfEnrollmentFlowInfo
			};

		case selfEnrollmentFlowTypes.SELF_ENROLLMENT_ERROR:
			return {
				...state,
				message: action.payload.message
			};

		case selfEnrollmentFlowTypes.GET_SAVINGS_CHART_INFO_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				savingsChartInfo: action.payload.savingsChartInfo
			};

		default:
			return state;
	}
};

export default selfEnrollmentFlowReducer;
