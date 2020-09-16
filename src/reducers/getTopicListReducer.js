import { GET_TOPIC_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST.TOPIC_LIST_SUCCESS:
      const customTopicList = {
        groupId: action.groupId,
        topicList: action.topicList,
      };
      return [...state, customTopicList];

    default:
      return state;
  }
};

export default reducer;
