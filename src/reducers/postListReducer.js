import { GET_POST_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case GET_POST_LIST.POST_LIST_SUCCESS:
      newstate = action.postList.data;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
