import { SUBMIT_GROUP } from '../constants';
const initialState = {
  isLoading: null,
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_GROUP.SUBMIT_GROUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: 1,
        message: action.message,
      };
    case SUBMIT_GROUP.SUBMIT_GROUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_GROUP.SUBMIT_GROUP_FAILED:
      return {
        ...state,
        type: 2,
        isLoading: false,
        message: action.message,
      };
    case SUBMIT_GROUP.SUBMIT_GROUP_CLEAR:
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
