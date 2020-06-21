import MessageTypes from './message-types';

const INITIAL_STATE = {};

const MessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageTypes.CREATE_MESSAGE:
      return (state = action.payload);
    case MessageTypes.DELETE_MESSAGE:
      return (state = INITIAL_STATE);
    default:
      return state;
  }
};

export default MessageReducer;
