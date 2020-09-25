import { UNLIKE_COMMENT } from '../constants';
const initialState = {
  isLoading: null,
  type: 0,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UNLIKE_COMMENT.UNLIKE_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: 1,
        data: action.data,
      };
    case UNLIKE_COMMENT.UNLIKE_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UNLIKE_COMMENT.UNLIKE_COMMENT_FAILED:
      return {
        ...state,
        type: 2,
        isLoading: false,
        data: action.data,
      };
    case UNLIKE_COMMENT.UNLIKE_COMMENT_CLEAR:
      return {
        ...state,
        isLoading: null,
        type: 0,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
