import { REQUEST_POST } from '../constants';
const initialState = {};

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case REQUEST_POST.POST_SUCCESS:
      newstate = action.post.data[0];
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
