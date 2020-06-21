import LeadTypes from './lead-types';

const INITIAL_STATE = {
  leads: [],
};

const LeadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadTypes.GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case LeadTypes.DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case LeadTypes.ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    default:
      return state;
  }
};

export default LeadReducer;
