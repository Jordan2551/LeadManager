import ErrorTypes from './error-types';

const INITIAL_STATE = {};

const ErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ErrorTypes.GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    case ErrorTypes.DELETE_ERRORS:
      return (state = INITIAL_STATE);
    default:
      return state;
  }
};

export default ErrorReducer;
