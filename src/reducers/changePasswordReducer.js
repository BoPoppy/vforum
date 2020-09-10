import { CHANGE_PASSWORD } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD.CHANGE_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.message };
    case CHANGE_PASSWORD.CHANGE_PASSWORD_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.message };
    case CHANGE_PASSWORD.CHANGE_PASSWORD_LOAD:
      return { ...state, isLoading: true };
    case CHANGE_PASSWORD.CHANGE_PASSWORD_REFRESH:
      return {
        ...state,
        isLoading: 'false',
        type: 0,
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;
