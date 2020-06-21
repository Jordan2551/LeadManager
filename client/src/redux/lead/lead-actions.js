import './lead-types';
import LeadTypes from './lead-types';

import axios from 'axios';

export const getLeads = (dispatch) => {
  axios
    .get('http://localhost:8000/api/leads/')
    .then((res) => {
      dispatch({
        type: LeadTypes.GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteLead = (dispatch, id) => {
  axios.delete(`http://localhost:8000/api/leads/${id}/`).then((res) => {
    dispatch({
      type: LeadTypes.DELETE_LEAD,
      payload: id,
    });
  });
};

export const addLead = (dispatch, lead) => {
  axios.post(`http://localhost:8000/api/leads/`, lead).then((res) => {
    dispatch({
      type: LeadTypes.ADD_LEAD,
      payload: res.data,
    });
  });
};
