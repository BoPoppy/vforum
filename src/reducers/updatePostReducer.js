import { UPDATE_POST } from '../constants';
const initialState = {
  isLoading: 'false',
  type: 0,
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST.UPDATE_POST_SUCCESS:
      return { ...state, isLoading: false, type: 1, message: action.data };
    case UPDATE_POST.UPDATE_POST_FAILED:
      return { ...state, isLoading: false, type: 2, message: action.data };
    case UPDATE_POST.UPDATE_POST_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_POST.UPDATE_POST_CLEAR:
      return { ...state, isLoading: 'false', type: 0, message: '' };
    default:
      return state;
  }
};

export default reducer;
