import { combineReducers } from 'redux';
import selfEnrollmentFlowReducer from './selfEnrollmentFlowReducer';

const rootReducer = combineReducers({
	selfEnrollmentFlow: selfEnrollmentFlowReducer
});

export default rootReducer;
