import { LOGOUT, LOGIN } from '../constants';
import { removeAuthToken } from '../common/auth';
const initialState = false;

const reducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case LOGOUT.SUCCESS:
      removeAuthToken('storage');
      newState = true;
      return newState;
    case LOGIN.LOAD_SUCCESS:
      newState = false;
      return newState;
    default:
      return state;
  }
};

export default reducer;
