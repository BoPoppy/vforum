import { LOADING } from '../constants';

const initialState = {
  showLoading: false,
};

const reducer = (state = initialState, action) => {
  const newstate = state;
  switch (action.type) {
    case LOADING.SHOW_LOADING:
      newstate = true;
      return newstate;
    case LOADING.HIDE_LOADING:
      newstate = false;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
