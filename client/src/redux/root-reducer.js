import { combineReducers } from 'redux';

import LeadReducer from './lead/lead-reducer';

const rootReducer = combineReducers({
  leads: LeadReducer,
});

export default rootReducer;
