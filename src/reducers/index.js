import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';
import popoverMessageReducer from './popoverMessageReducer';
import logOutReducer from './logOutReducer';
import userInfoReducer from './userInfoReducer';
import changePasswordRequest from './changePasswordReducer';
import getGroupListReducer from './getGroupListReducer';
import postListReducer from './postListReducer';
import postReducer from './postReducer';
import getTopicListReducer from './getTopicListReducer';
import commentPostReducer from './commentPostReducer';
import submitPost from './submitPostReducer';
import submitTopic from './submitTopicReducer';
import singleTopicList from './singleTopicListReducer';
import submitGroup from './submitGroupReducer';
import getUserList from './getUserListReducer';

const rootReducer = combineReducers({
  registerReducer,
  isLoading: loadingReducer,
  loginReducer,
  showMessage: popoverMessageReducer,
  logOut: logOutReducer,
  userInfo: userInfoReducer,
  changePassword: changePasswordRequest,
  groupList: getGroupListReducer,
  topicList: getTopicListReducer,
  postList: postListReducer,
  post: postReducer,
  comment: commentPostReducer,
  submitPost: submitPost,
  submitTopic: submitTopic,
  singleTopicList: singleTopicList,
  submitGroup: submitGroup,
  UserList: getUserList,
});

export default rootReducer;
