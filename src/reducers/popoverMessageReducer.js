import { MESSAGE } from '../constants';

const initialState = {
  data: {
    messageType: 0,
    message: '',
    status: false,
  },
};

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case MESSAGE.SHOW_MESSAGE:
      return {
        ...newstate,
        data: {
          ...newstate.data,
          messageType: action.messageType,
          message: action.message,
          status: true,
        },
      };
    case MESSAGE.HIDE_MESSAGE:
      return {
        ...newstate,
        data: {
          ...newstate.data,
          messageType: 0,
          message: '',
          status: false,
        },
      };
    default:
      return newstate;
  }
};

export default reducer;
