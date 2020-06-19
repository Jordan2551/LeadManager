import { combineReducers } from 'redux';

import LeadReducer from './lead/lead-reducer';

const rootReducer = combineReducers({
  lead: LeadReducer,
});

export default rootReducer;
