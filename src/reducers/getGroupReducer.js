import { GET_GROUP } from '../constants';
const initialState = {};

const reducer = (state = initialState, action) => {
  var newstate = state;
  switch (action.type) {
    case GET_GROUP.SUCCESS_GROUP:
      newstate = action.data;
      return newstate;
    default:
      return newstate;
  }
};

export default reducer;
