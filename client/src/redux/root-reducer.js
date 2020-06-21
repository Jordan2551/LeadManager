import { combineReducers } from 'redux';

import LeadReducer from './lead/lead-reducer';
import ErrorReducer from './error/error-reducer';
import MessageReducer from './message/message-reducer';

const rootReducer = combineReducers({
  leads: LeadReducer,
  errors: ErrorReducer,
  messages: MessageReducer,
});

export default rootReducer;
