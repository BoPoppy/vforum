import { GET_ALL_COMMENT } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case GET_ALL_COMMENT.GET_ALL_COMMENT_SUCCESS:
      newState = action.data;
      return newState;
    case GET_ALL_COMMENT.GET_ALL_COMMENT_FAILED:
      newState = action.data;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
