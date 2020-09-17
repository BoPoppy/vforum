import { UPDATE_ROLE } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROLE.UPDATE_ROLE_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.message };
    case UPDATE_ROLE.UPDATE_ROLE_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.message };
    case UPDATE_ROLE.UPDATE_ROLE_REQUEST:
      return { ...state, isLoading: true };
    // case UPDATE_ROLE..CHANGE_PASSWORD_REFRESH:
    //   return {
    //     ...state,
    //     isLoading: 'false',
    //     type: 0,
    //     message: '',
    //   };
    default:
      return state;
  }
};

export default reducer;
