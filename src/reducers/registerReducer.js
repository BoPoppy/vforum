import { REGISTER } from '../constants';
const initialState = false;

const reducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case REGISTER.REQUEST_SUCCESS:
      newState = true;
      return newState;
    case REGISTER.REQUEST_FAIL:
      newState = false;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
