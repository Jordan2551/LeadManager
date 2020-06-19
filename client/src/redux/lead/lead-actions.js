import './lead-types';
import LeadTypes from './lead-types';

export const getMessage = () => ({
  type: 'GET_MESSAGE',
});

export const addLead = (lead) => ({
  type: LeadTypes.ADD_LEAD,
  payload: lead,
});

export const removeLead = (id) => ({
  type: LeadTypes.REMOVE_LEAD,
  payload: id,
});

export const editLead = (lead) => ({
  type: LeadTypes.EDIT_LEAD,
  payload: lead,
});
