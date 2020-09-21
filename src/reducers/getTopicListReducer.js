import { GET_TOPIC_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newGroupList = state;
  switch (action.type) {
    case GET_TOPIC_LIST.TOPIC_LIST_SUCCESS:
      const customTopicList = {
        groupId: action.groupId,
        topicList: action.topicList,
      };
      for (var i = 0; i < state.length; i++) {
        if (state[i].groupId === customTopicList.groupId) {
          state[i] = customTopicList;
        }
      }
      return [...state, customTopicList];

    default:
      return state;
  }
};

export default reducer;
