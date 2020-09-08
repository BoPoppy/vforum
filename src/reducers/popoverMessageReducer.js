import { MESSAGE } from '../constants';

const initialState = {
  messageType: 0,
  message: '',
  status: false,
};

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case MESSAGE.SHOW_MESSAGE:
      newstate.messageType = action.messageType;
      newstate.message = action.message;
      newstate.status = true;
      return newstate;
    case MESSAGE.HIDE_MESSAGE:
      newstate.status = false;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
