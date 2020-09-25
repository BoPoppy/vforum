import { SUBMIT_LIKE } from '../constants';
const initialState = {
  isLoading: null,
  type: 0,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LIKE.SUBMIT_LIKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: 1,
        data: action.data,
      };
    case SUBMIT_LIKE.SUBMIT_LIKE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_LIKE.SUBMIT_LIKE_FAILED:
      return {
        ...state,
        type: 2,
        isLoading: false,
        data: action.data,
      };
    case SUBMIT_LIKE.SUBMIT_LIKE_CLEAR:
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
