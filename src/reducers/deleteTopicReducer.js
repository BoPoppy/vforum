import { DELETE_TOPIC } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TOPIC.DELETE_TOPIC_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.data };
    case DELETE_TOPIC.DELETE_TOPIC_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.data };
    case DELETE_TOPIC.DELETE_TOPIC_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_TOPIC.DELETE_TOPIC_CLEAR:
      return { ...state, isLoading: 'false', type: 0, message: '' };
    default:
      return state;
  }
};

export default reducer;
