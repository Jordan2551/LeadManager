import LeadTypes from './lead-types';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

const LeadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadTypes.ADD_LEAD:
      return {
        ...state,
        ...action.payload,
      };
    case LeadTypes.REMOVE_LEAD:
      return {
        ...state,
      };
    case LeadTypes.EDIT_LEAD:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default LeadReducer;
