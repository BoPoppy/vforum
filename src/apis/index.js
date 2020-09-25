import axiosService from '../common/axiosService';

const REACT_APP_API_URL = 'http://localhost:4000';

const registerUser = (data) => {
  console.log('call register api', data);
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/signup`, data);
};

const loginUser = (data) => {
  console.log('call login api', data);
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/login`, data);
};

const getUserInfo = () => {
  console.log('get user info');
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/info`);
};

const changePassword = (data) => {
  console.log('change user password', data);
  return axiosService.patch(`${REACT_APP_API_URL}/v1/api/info`, data);
};

const refreshToken = (data) => {
  console.log('RefreshToken', data);
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/refresh-token`, {
    refreshToken: data,
  });
};

const getGroupList = () => {
  console.log('Get group list');
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/group`);
};

const getGroup = (id) => {
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/group/${id}`);
};

const getTopicList = (id) => {
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/group/${id}/topic`);
};

const getPostList = (groupId, topicId) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post`
  );
};

const getPost = (groupId, topicId, postId) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}`
  );
};

const getTopic = (groupId, id) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${id}`
  );
};

const requestComment = (groupId, topicId, postId, description) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/comment`,
    description
  );
};

const submitPost = (groupId, topicId, data) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post`,
    data
  );
};

const submitLogout = () => {
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/logout`);
};

const submitTopic = (groupId, data) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic`,
    data
  );
};

const submitGroup = (data) => {
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/group`, data);
};

const getUserList = () => {
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/admin/info`);
};

const changeRoleUser = (id, data) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/admin/info/${id}`,
    data
  );
};

const deleteComment = (groupId, topicId, postId, id) => {
  return axiosService.delete(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/comment/${id}`
  );
};

const getAllComment = (groupId, topicId, postId) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/comment`
  );
};

const updateComment = (groupId, topicId, postId, id, data) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/comment/${id}`,
    data
  );
};

const deleteUser = (id) => {
  return axiosService.delete(`${REACT_APP_API_URL}/v1/api/admin/info/${id}`);
};

const deleteGroup = (id) => {
  return axiosService.delete(`${REACT_APP_API_URL}/v1/api/group/${id}`);
};

const updateGroup = (id, data) => {
  return axiosService.patch(`${REACT_APP_API_URL}/v1/api/group/${id}`, data);
};

const deleteTopic = (groupId, id) => {
  return axiosService.delete(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${id}`
  );
};

const updateTopic = (groupId, id, data) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${id}`,
    data
  );
};

const deletePost = (groupId, topicId, id) => {
  return axiosService.delete(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${id}`
  );
};

const updatePost = (groupId, topicId, id, data) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${id}`,
    data
  );
};

const submitLikePost = (groupId, topicId, postId) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/addlike`
  );
};

const submitUnlikePost = (groupId, topicId, postId) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/minuslike`
  );
};

export {
  submitUnlikePost,
  submitLikePost,
  getTopic,
  getGroup,
  deleteTopic,
  updateTopic,
  deletePost,
  updatePost,
  deleteGroup,
  updateGroup,
  deleteUser,
  updateComment,
  getAllComment,
  deleteComment,
  changeRoleUser,
  getUserList,
  submitGroup,
  submitTopic,
  submitLogout,
  submitPost,
  registerUser,
  loginUser,
  getUserInfo,
  changePassword,
  refreshToken,
  getGroupList,
  getTopicList,
  getPostList,
  getPost,
  requestComment,
};
