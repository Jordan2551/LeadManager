import LeadTypes from './lead-types';

const INITIAL_STATE = {
  message: 'start',
};

const LeadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadTypes.ADD_LEAD:
    case 'GET_MESSAGE':
      return {
        ...state,
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
