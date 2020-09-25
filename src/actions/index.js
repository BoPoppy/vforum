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
  GET_GROUP,
  SUBMIT_TOPIC,
  SUBMIT_GROUP,
  GET_USER_LIST,
  UPDATE_ROLE,
  DELETE_COMMENT,
  GET_ALL_COMMENT,
  UPDATE_COMMENT,
  DELETE_USER,
  UPDATE_GROUP,
  DELETE_GROUP,
  DELETE_TOPIC,
  UPDATE_TOPIC,
  DELETE_POST,
  UPDATE_POST,
  REQUEST_TOPIC,
  SUBMIT_UNLIKE,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} from '../constants';

const loadId = (email, password) => ({
  type: LOGIN.LOAD,
  email,
  password,
});

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

const updateRoleClear = () => ({
  type: UPDATE_ROLE.UPDATE_ROLE_CLEAR,
});

const deleteCommentRequest = (groupId, topicId, postId, id) => ({
  type: DELETE_COMMENT.DELETE_COMMENT_REQUEST,
  groupId,
  topicId,
  postId,
  id,
});

const deleteCommentSuccess = (data) => ({
  type: DELETE_COMMENT.DELETE_COMMENT_SUCCESS,
  data,
});

const deleteCommentFailed = (data) => ({
  type: DELETE_COMMENT.DELETE_COMMENT_FAILED,
  data,
});

const deleteCommentClear = () => ({
  type: DELETE_COMMENT.DELETE_COMMENT_CLEAR,
});

const getAllCommentRequest = (groupId, topicId, postId) => ({
  type: GET_ALL_COMMENT.GET_ALL_COMMENT_REQUEST,
  groupId,
  topicId,
  postId,
});

const getAllCommentSuccess = (data) => ({
  type: GET_ALL_COMMENT.GET_ALL_COMMENT_SUCCESS,
  data,
});

const getAllCommentFailed = (data) => ({
  type: GET_ALL_COMMENT.GET_ALL_COMMENT_FAILED,
  data,
});

const updateCommentRequest = (groupId, topicId, postId, id, data) => ({
  type: UPDATE_COMMENT.UPDATE_COMMENT_REQUEST,
  groupId,
  topicId,
  postId,
  id,
  data,
});

const updateCommentSuccess = (data) => ({
  type: UPDATE_COMMENT.UPDATE_COMMENT_SUCCESS,
  data,
});

const updateCommentFailed = (data) => ({
  type: UPDATE_COMMENT.UPDATE_COMMENT_FAILED,
  data,
});

const updateCommentClear = () => ({
  type: UPDATE_COMMENT.UPDATE_COMMENT_CLEAR,
});

const deleteUserRequest = (id) => ({
  type: DELETE_USER.DELETE_USER_REQUEST,
  id,
});

const deleteUserSuccess = (data) => ({
  type: DELETE_USER.DELETE_USER_SUCCESS,
  data,
});

const deleteUserFailed = (data) => ({
  type: DELETE_USER.DELETE_USER_FAILED,
  data,
});

const deleteUserClear = () => ({
  type: DELETE_USER.DELETE_USER_CLEAR,
});

const deleteGroupRequest = (id) => ({
  type: DELETE_GROUP.DELETE_GROUP_REQUEST,
  id,
});

const deleteGroupSuccess = (data) => ({
  type: DELETE_GROUP.DELETE_GROUP_SUCCESS,
  data,
});

const deleteGroupFailed = (data) => ({
  type: DELETE_GROUP.DELETE_GROUP_FAILED,
  data,
});

const deleteGroupClear = () => ({
  type: DELETE_GROUP.DELETE_GROUP_CLEAR,
});

const updateGroupRequest = (id, data) => ({
  type: UPDATE_GROUP.UPDATE_GROUP_REQUEST,

  id,
  data,
});

const updateGroupSuccess = (data) => ({
  type: UPDATE_GROUP.UPDATE_GROUP_SUCCESS,
  data,
});

const updateGroupFailed = (data) => ({
  type: UPDATE_GROUP.UPDATE_GROUP_FAILED,
  data,
});

const updateGroupClear = () => ({
  type: UPDATE_GROUP.UPDATE_GROUP_CLEAR,
});

const updateTopicRequest = (groupId, id, data) => ({
  type: UPDATE_TOPIC.UPDATE_TOPIC_REQUEST,
  groupId,
  id,
  data,
});

const updateTopicSuccess = (data) => ({
  type: UPDATE_TOPIC.UPDATE_TOPIC_SUCCESS,
  data,
});

const updateTopicFailed = (data) => ({
  type: UPDATE_TOPIC.UPDATE_TOPIC_FAILED,
  data,
});

const updateTopicClear = () => ({
  type: UPDATE_TOPIC.UPDATE_TOPIC_CLEAR,
});

const deleteTopicRequest = (groupId, id) => ({
  type: DELETE_TOPIC.DELETE_TOPIC_REQUEST,
  groupId,
  id,
});

const deleteTopicSuccess = (data) => ({
  type: DELETE_TOPIC.DELETE_TOPIC_SUCCESS,
  data,
});

const deleteTopicFailed = (data) => ({
  type: DELETE_TOPIC.DELETE_TOPIC_FAILED,
  data,
});

const deleteTopicClear = () => ({
  type: DELETE_TOPIC.DELETE_TOPIC_CLEAR,
});

const updatePostRequest = (groupId, topicId, id, data) => ({
  type: UPDATE_POST.UPDATE_POST_REQUEST,
  groupId,
  topicId,
  id,
  data,
});

const updatePostSuccess = (data) => ({
  type: UPDATE_POST.UPDATE_POST_SUCCESS,
  data,
});

const updatePostFailed = (data) => ({
  type: UPDATE_POST.UPDATE_POST_FAILED,
  data,
});

const updatePostClear = () => ({
  type: UPDATE_POST.UPDATE_POST_CLEAR,
});

const deletePostRequest = (groupId, topicId, id) => ({
  type: DELETE_POST.DELETE_POST_REQUEST,
  groupId,
  topicId,
  id,
});

const deletePostSuccess = (data) => ({
  type: DELETE_POST.DELETE_POST_SUCCESS,
  data,
});

const deletePostFailed = (data) => ({
  type: DELETE_POST.DELETE_POST_FAILED,
  data,
});

const deletePostClear = () => ({
  type: DELETE_POST.DELETE_POST_CLEAR,
});

const getGroupRequest = (id) => ({
  type: GET_GROUP.REQUEST_GROUP,
  id,
});

const getGroupSuccess = (data) => ({
  type: GET_GROUP.SUCCESS_GROUP,
  data,
});

const getGroupFailed = (data) => ({
  type: GET_GROUP.FAILED_GROUP,
  data,
});

const requestTopic = (groupId, id) => ({
  type: REQUEST_TOPIC.LOAD_TOPIC,
  groupId,
  id,
});

const requestTopicSuccess = (data) => ({
  type: REQUEST_TOPIC.TOPIC_SUCCESS,
  data,
});

const requestTopicFailed = (data) => ({
  type: REQUEST_TOPIC.FAILED_TOPIC,
  data,
});

const requestSubmitLike = (groupId, topicId, postId) => ({
  type: SUBMIT_LIKE.SUBMIT_LIKE_REQUEST,
  groupId,
  topicId,
  postId,
});

const successSubmitLike = (data) => ({
  type: SUBMIT_LIKE.SUBMIT_LIKE_SUCCESS,
  data,
});

const failedSubmitLike = (data) => ({
  type: SUBMIT_LIKE.SUBMIT_LIKE_FAILED,
  data,
});

const clearSubmitLike = () => ({
  type: SUBMIT_LIKE.SUBMIT_LIKE_CLEAR,
});

const requestUnlikePost = (groupId, topicId, postId) => ({
  type: SUBMIT_UNLIKE.SUBMIT_UNLIKE_REQUEST,
  groupId,
  topicId,
  postId,
});

const successUnlikePost = (data) => ({
  type: SUBMIT_UNLIKE.SUBMIT_UNLIKE_SUCCESS,
  data,
});

const failedUnlikePost = (data) => ({
  type: SUBMIT_UNLIKE.SUBMIT_UNLIKE_FAILED,
  data,
});

const clearUnlikePost = () => ({
  type: SUBMIT_UNLIKE.SUBMIT_UNLIKE_CLEAR,
});

const requestLikeComment = (groupId, topicId, postId, id) => ({
  type: LIKE_COMMENT.LIKE_COMMENT_REQUEST,
  groupId,
  topicId,
  postId,
  id,
});

const successLikeComment = (data) => ({
  type: LIKE_COMMENT.LIKE_COMMENT_SUCCESS,
  data,
});

const failedLikeComment = (data) => ({
  type: LIKE_COMMENT.LIKE_COMMENT_FAILED,
  data,
});

const clearLikeComment = () => ({
  type: LIKE_COMMENT.LIKE_COMMENT_CLEAR,
});

const requestUnlikeComment = (groupId, topicId, postId, id) => ({
  type: UNLIKE_COMMENT.UNLIKE_COMMENT_REQUEST,
  groupId,
  topicId,
  postId,
  id,
});

const successUnlikeComment = (data) => ({
  type: UNLIKE_COMMENT.UNLIKE_COMMENT_SUCCESS,
  data,
});

const failedUnlikeComment = (data) => ({
  type: UNLIKE_COMMENT.UNLIKE_COMMENT_FAILED,
  data,
});

const clearUnlikeComment = () => ({
  type: UNLIKE_COMMENT.UNLIKE_COMMENT_CLEAR,
});

export {
  requestLikeComment,
  successLikeComment,
  failedLikeComment,
  clearLikeComment,
  requestUnlikeComment,
  successUnlikeComment,
  failedUnlikeComment,
  clearUnlikeComment,
  clearSubmitLike,
  clearUnlikePost,
  requestUnlikePost,
  successUnlikePost,
  failedUnlikePost,
  requestSubmitLike,
  successSubmitLike,
  failedSubmitLike,
  requestTopic,
  requestTopicFailed,
  requestTopicSuccess,
  getGroupFailed,
  getGroupRequest,
  getGroupSuccess,
  updatePostClear,
  updatePostSuccess,
  updatePostRequest,
  updatePostFailed,
  deletePostClear,
  deletePostSuccess,
  deletePostRequest,
  deletePostFailed,
  updateTopicClear,
  updateTopicSuccess,
  updateTopicRequest,
  updateTopicFailed,
  deleteTopicClear,
  deleteTopicSuccess,
  deleteTopicRequest,
  deleteTopicFailed,
  updateGroupClear,
  updateGroupSuccess,
  updateGroupRequest,
  updateGroupFailed,
  deleteGroupClear,
  deleteGroupSuccess,
  deleteGroupRequest,
  deleteGroupFailed,
  deleteUserClear,
  deleteUserFailed,
  deleteUserRequest,
  deleteUserSuccess,
  updateCommentClear,
  updateCommentSuccess,
  updateCommentRequest,
  updateCommentFailed,
  getAllCommentRequest,
  getAllCommentSuccess,
  getAllCommentFailed,
  deleteCommentClear,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailed,
  updateRoleRequest,
  updateRoleSuccess,
  updateRoleClear,
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
