import './lead-types';
import LeadTypes from './lead-types';

import axios from 'axios';
import { getErrors } from '../error/error-actions';
import { createMessage } from '../message/message-actions';

export const getLeads = (dispatch) => {
  axios
    .get('http://localhost:8000/api/leads/')
    .then((res) => {
      dispatch({
        type: LeadTypes.GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatchErrors(dispatch, err.response.data, err.response.status);
    });
};

export const deleteLead = (dispatch, id) => {
  axios
    .delete(`http://localhost:8000/api/leads/${id}/`)
    .then((res) => {
      dispatch(createMessage({ leadDeleted: 'Lead Deleted' }));
      dispatch({
        type: LeadTypes.DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => {
      dispatchErrors(dispatch, err.response.data, err.response.status);
    });
};

export const addLead = (dispatch, lead) => {
  axios
    .post(`http://localhost:8000/api/leads/`, lead)
    .then((res) => {
      dispatch(createMessage({ leadAdded: 'Lead Added' }));
      dispatch({
        type: LeadTypes.ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatchErrors(dispatch, err.response.data, err.response.status);
    });
};

const dispatchErrors = (dispatch, data, status) => {
  const errors = {
    message: data,
    status,
  };
  dispatch(getErrors(errors));
};
