import { GET_GROUP_LIST } from '../constants';
const initialState = [];

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case GET_GROUP_LIST.SUCCESS_GROUP_LIST:
      newstate = action.groupList;
      return newstate;

    default:
      return newstate;
  }
};

export default reducer;
