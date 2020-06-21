import ErrorTypes from '../error/error-types';

export const getErrors = (errors) => ({
  type: ErrorTypes.GET_ERRORS,
  payload: errors,
});

export const deleteErrors = (dispatch) =>
  dispatch({
    type: ErrorTypes.DELETE_ERRORS,
  });
