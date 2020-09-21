import { DELETE_COMMENT } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT.DELETE_COMMENT_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.data };
    case DELETE_COMMENT.DELETE_COMMENT_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.data };
    case DELETE_COMMENT.DELETE_COMMENT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_COMMENT.DELETE_COMMENT_CLEAR:
      return { ...state, isLoading: 'false', type: 0, message: '' };
    default:
      return state;
  }
};

export default reducer;
