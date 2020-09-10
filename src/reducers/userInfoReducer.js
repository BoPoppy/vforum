import { INFO, LOGOUT } from '../constants';
const initialState = {
  display_name: '',
  email: '',
  gender: '',
  role: '',
  id: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO.SUCCESS_INFO:
      return {
        ...state,
        display_name: action.display_name,
        email: action.email,
        gender: action.gender,
        role: action.role,
        id: action.id,
      };
    case LOGOUT.SUBMIT:
      return {
        ...state,
        display_name: '',
        email: '',
        gender: '',
        role: '',
        id: '',
      };
    default:
      return state;
  }
};

export default reducer;
