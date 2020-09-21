import { DELETE_USER } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER.DELETE_USER_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.data };
    case DELETE_USER.DELETE_USER_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.data };
    case DELETE_USER.DELETE_USER_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_USER.DELETE_USER_CLEAR:
      return { ...state, isLoading: 'false', type: 0, message: '' };
    default:
      return state;
  }
};

export default reducer;
