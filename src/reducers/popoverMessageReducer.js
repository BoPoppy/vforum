import { MESSAGE } from '../constants';

const initialState = {
  data: {
    messageType: 0,
    message: '',
    status: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE.SHOW_MESSAGE:
      return {
        ...state,
        data: {
          ...state.data,
          messageType: action.messageType,
          message: action.message,
          status: true,
        },
      };
    case MESSAGE.HIDE_MESSAGE:
      return {
        ...state,
        data: {
          ...state.data,
          messageType: 0,
          message: '',
          status: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
