import { SUBMIT_POST } from '../constants';
const initialState = {
  isLoading: null,
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_POST.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: 1,
        message: action.message,
      };
    case SUBMIT_POST.SUBMIT_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_POST.SUBMIT_POST_FAILED:
      return {
        ...state,
        type: 2,
        isLoading: false,
        message: action.message,
      };
    case SUBMIT_POST.SUBMIT_POST_CLEAR:
      return {
        ...state,
        isLoading: null,
        type: 0,
        message: '',
      };
    default:
      return state;
  }
};

export default reducer;
