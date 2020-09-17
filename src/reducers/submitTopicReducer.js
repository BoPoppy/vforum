import { SUBMIT_TOPIC } from '../constants';
const initialState = {
  isLoading: null,
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_TOPIC.SUBMIT_TOPIC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        type: 1,
        message: action.message,
      };
    case SUBMIT_TOPIC.SUBMIT_TOPIC_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUBMIT_TOPIC.SUBMIT_TOPIC_FAILED:
      return {
        ...state,
        type: 2,
        isLoading: false,
        message: action.message,
      };
    case SUBMIT_TOPIC.SUBMIT_TOPIC_CLEAR:
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
