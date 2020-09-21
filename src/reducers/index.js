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
import changeRole from './changeRoleUserReducer';
import allComment from './allCommentReducer';
import deleteComment from './deleteCommentReducer';
import updateComment from './updateCommentReducer';
import deleteUser from './deleteUserReducer';
import updateGroup from './updateGroupReducer';
import deleteGroup from './deleteGroupReducer';
import updateTopic from './updateTopicReducer';
import deleteTopic from './deleteTopicReducer';
import updatePost from './updatePostReducer';
import deletePost from './deletePostReducer';

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
  changeRole: changeRole,
  deleteComment: deleteComment,
  allComment: allComment,
  updateComment: updateComment,
  deleteUser: deleteUser,
  deleteGroup: deleteGroup,
  updateGroup: updateGroup,
  deleteTopic: deleteTopic,
  updateTopic: updateTopic,
  deletePost: deletePost,
  updatePost: updatePost,
});

export default rootReducer;
