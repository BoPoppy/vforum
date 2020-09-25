import { REQUEST_TOPIC } from '../constants';
const initialState = {};

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case REQUEST_TOPIC.TOPIC_SUCCESS:
      newstate = action.data;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
