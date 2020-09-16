import { COMMENT_REQUEST } from '../constants';
const initialState = false;

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case COMMENT_REQUEST.COMMENT_POST_SUCCESS:
      newstate = true;
      return newstate;
    case COMMENT_REQUEST.COMMENT_POST_FAILED:
      newstate = false;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
