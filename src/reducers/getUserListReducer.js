import { GET_USER_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case GET_USER_LIST.GET_USER_LIST_SUCCESS:
      newState = action.data.result;
      return newState;
    case GET_USER_LIST.GET_USER_LIST_FAILED:
      newState = action.data;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
