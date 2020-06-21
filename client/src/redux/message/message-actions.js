import ErrorTypes from '../error/error-types';
import MessageTypes from './message-types';

export const createMessage = (message) => ({
  type: MessageTypes.CREATE_MESSAGE,
  payload: message,
});

export const deleteMessage = (dispatch) =>
  dispatch({
    type: MessageTypes.DELETE_MESSAGE,
  });
