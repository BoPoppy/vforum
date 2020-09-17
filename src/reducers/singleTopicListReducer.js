import { GET_TOPIC_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case GET_TOPIC_LIST.TOPIC_LIST_SUCCESS_SINGLE:
      newstate = action.topicList;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
