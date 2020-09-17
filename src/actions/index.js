import {
  LOGIN,
  REGISTER,
  LOADING,
  MESSAGE,
  LOGOUT,
  INFO,
  CHANGE_PASSWORD,
  GET_GROUP_LIST,
  GET_TOPIC_LIST,
  GET_POST_LIST,
  REQUEST_POST,
  COMMENT_REQUEST,
  SUBMIT_POST,
  SUBMIT_LIKE,
  SUBMIT_TOPIC,
  SUBMIT_GROUP,
  GET_USER_LIST,
  UPDATE_ROLE,
} from '../constants';

const loadId = (email, password) => ({
  type: LOGIN.LOAD,
  email,
  password,
});
// const loadId = (email, password) => {
//   console.log('email, password');
//   return {
//     type: LOGIN.LOAD,
//     email,
//     password,
//   };
// };

const setId = () => ({
  type: LOGIN.LOAD_SUCCESS,
});

const setError = () => ({
  type: LOGIN.LOAD_FAIL,
});

const registerRequest = (email, password, display_name, gender) => ({
  type: REGISTER.REQUEST,
  email,
  password,
  display_name,
  gender,
});

const registerSuccess = () => ({
  type: REGISTER.REQUEST_SUCCESS,
});

const registerFail = () => ({
  type: REGISTER.REQUEST_FAIL,
});

const showLoading = () => ({
  type: LOADING.SHOW_LOADING,
});

const hideLoading = () => ({
  type: LOADING.HIDE_LOADING,
});

const showMessage = (messageType, message) => ({
  type: MESSAGE.SHOW_MESSAGE,
  messageType,
  message,
});

const hideMessage = () => ({
  type: MESSAGE.HIDE_MESSAGE,
});

const logOut = () => ({
  type: LOGOUT.SUCCESS,
});

const submitLogOut = () => ({
  type: LOGOUT.SUBMIT,
});

const requestInfo = () => ({
  type: INFO.LOAD_INFO,
});

const requestInfoSuccess = (display_name, email, gender, role, id) => ({
  type: INFO.SUCCESS_INFO,
  display_name,
  email,
  gender,
  role,
  id,
});

const requestInfoFailed = () => ({
  type: INFO.FAILED_INFO,
});

const requestChangePassword = (oldpassword, newpassword, renewpassword) => ({
  type: CHANGE_PASSWORD.CHANGE_PASSWORD_LOAD,
  oldpassword,
  newpassword,
  renewpassword,
});

const changePasswordSuccess = (message) => ({
  type: CHANGE_PASSWORD.CHANGE_PASSWORD_SUCCESS,
  message,
});

const changePasswordFailed = (message) => ({
  type: CHANGE_PASSWORD.CHANGE_PASSWORD_FAILED,
  message,
});

const refreshChangePassword = () => ({
  type: CHANGE_PASSWORD.CHANGE_PASSWORD_REFRESH,
});

const requestGroupList = () => ({
  type: GET_GROUP_LIST.REQUEST_GROUP_LIST,
});

const successGroupList = (groupList) => ({
  type: GET_GROUP_LIST.SUCCESS_GROUP_LIST,
  groupList,
});

const failedGroupList = () => ({
  type: GET_GROUP_LIST.FAILED_GROUP_LIST,
});

const requestTopicList = (id) => ({
  type: GET_TOPIC_LIST.REQUEST_TOPIC_LIST,
  id,
});

const successTopicList = (topicList, groupId) => ({
  type: GET_TOPIC_LIST.TOPIC_LIST_SUCCESS,
  topicList,
  groupId,
});

const successSingleTopicList = (topicList) => ({
  type: GET_TOPIC_LIST.TOPIC_LIST_SUCCESS_SINGLE,
  topicList,
});

const requestSingleTopicList = (groupId) => ({
  type: GET_TOPIC_LIST.REQUEST_TOPIC_LIST_SINGLE,
  groupId,
});

const failedTopicList = () => ({
  type: GET_TOPIC_LIST.FAILED_TOPIC_LIST,
});

const getPostList = (groupId, topicId) => ({
  type: GET_POST_LIST.REQUEST_POST_LIST,
  groupId,
  topicId,
});

const successPostList = (postList) => ({
  type: GET_POST_LIST.POST_LIST_SUCCESS,
  postList,
});

const failedPostList = () => ({
  type: GET_POST_LIST.FAILED_POST_LIST,
});

const getPost = (groupId, topicId, postId) => ({
  type: REQUEST_POST.LOAD_POST,
  groupId,
  topicId,
  postId,
});

const successPost = (post) => ({
  type: REQUEST_POST.POST_SUCCESS,
  post,
});

const failedPost = () => ({
  type: REQUEST_POST.FAILED_POST,
});

const commentRequest = (groupId, topicId, postId, description) => ({
  type: COMMENT_REQUEST.COMMENT_POST_REQUEST,
  groupId,
  topicId,
  postId,
  description,
});

const commentSuccess = (message) => ({
  type: COMMENT_REQUEST.COMMENT_POST_SUCCESS,
  message,
});

const commentFailed = () => ({
  type: COMMENT_REQUEST.COMMENT_POST_FAILED,
});

const submitPostRequest = (groupId, topicId, data) => ({
  type: SUBMIT_POST.SUBMIT_POST_REQUEST,
  groupId,
  topicId,
  data,
});

const submitPostSuccess = (message) => ({
  type: SUBMIT_POST.SUBMIT_POST_SUCCESS,
  message,
});

const submitPostFailed = (message) => ({
  type: SUBMIT_POST.SUBMIT_POST_FAILED,
  message,
});

const clearSubmitPost = () => ({
  type: SUBMIT_POST.SUBMIT_POST_CLEAR,
});

const submitTopicRequest = (groupId, data) => ({
  type: SUBMIT_TOPIC.SUBMIT_TOPIC_REQUEST,
  groupId,
  data,
});

const submitTopicSuccess = (message) => ({
  type: SUBMIT_TOPIC.SUBMIT_TOPIC_SUCCESS,
  message,
});

const submitTopicFailed = (message) => ({
  type: SUBMIT_TOPIC.SUBMIT_TOPIC_FAILED,
  message,
});

const submitTopicClear = () => ({
  type: SUBMIT_TOPIC.SUBMIT_TOPIC_CLEAR,
});

const submitGroupRequest = (data) => ({
  type: SUBMIT_GROUP.SUBMIT_GROUP_REQUEST,
  data,
});

const submitGroupSuccess = (message) => ({
  type: SUBMIT_GROUP.SUBMIT_GROUP_SUCCESS,
  message,
});

const submitGroupFailed = (message) => ({
  type: SUBMIT_GROUP.SUBMIT_GROUP_FAILED,
  message,
});

const submitGroupClear = () => ({
  type: SUBMIT_GROUP.SUBMIT_GROUP_CLEAR,
});

const getUserListRequest = () => ({
  type: GET_USER_LIST.GET_USER_LIST_REQUEST,
});

const getUserListSuccess = (data) => ({
  type: GET_USER_LIST.GET_USER_LIST_SUCCESS,
  data,
});

const getUserListFailed = (data) => ({
  type: GET_USER_LIST.GET_USER_LIST_FAILED,
  data,
});

const updateRoleRequest = (id, data) => ({
  type: UPDATE_ROLE.UPDATE_ROLE_REQUEST,
  id,
  data,
});

const updateRoleSuccess = (data) => ({
  type: UPDATE_ROLE.UPDATE_ROLE_SUCCESS,
  data,
});

const updateRoleFailed = (data) => ({
  type: UPDATE_ROLE.UPDATE_ROLE_FAILED,
  data,
});

export {
  updateRoleRequest,
  updateRoleSuccess,
  updateRoleFailed,
  submitLogOut,
  getUserListFailed,
  getUserListSuccess,
  getUserListRequest,
  submitGroupClear,
  submitGroupSuccess,
  submitGroupFailed,
  submitGroupRequest,
  requestSingleTopicList,
  successSingleTopicList,
  submitTopicClear,
  submitTopicSuccess,
  submitTopicFailed,
  submitTopicRequest,
  submitPostRequest,
  submitPostSuccess,
  clearSubmitPost,
  submitPostFailed,
  loadId,
  setId,
  setError,
  registerFail,
  registerSuccess,
  registerRequest,
  showLoading,
  hideLoading,
  showMessage,
  hideMessage,
  logOut,
  requestInfo,
  requestInfoFailed,
  requestInfoSuccess,
  requestChangePassword,
  changePasswordFailed,
  changePasswordSuccess,
  refreshChangePassword,
  requestGroupList,
  successGroupList,
  failedGroupList,
  requestTopicList,
  successTopicList,
  failedTopicList,
  getPostList,
  successPostList,
  failedPostList,
  getPost,
  successPost,
  failedPost,
  commentFailed,
  commentSuccess,
  commentRequest,
};
