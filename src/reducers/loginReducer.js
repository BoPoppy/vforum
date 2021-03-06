import { LOGIN, LOGOUT } from '../constants';
const initialState = false;

const reducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case LOGIN.LOAD_SUCCESS:
      newState = true;
      return newState;
    case LOGIN.LOAD_FAIL:
      return state;
    case LOGOUT.SUBMIT:
      newState = false;
      return newState;
    default:
      return state;
  }
};

export default reducer;
