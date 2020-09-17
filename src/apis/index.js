import axiosService from '../common/axiosService';

import { authHeader } from '../common/auth';

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
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/info`, authHeader());
};

const changePassword = (data) => {
  console.log('change user password', data);
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/info`,
    data,
    authHeader()
  );
};

const refreshToken = (data) => {
  console.log('RefreshToken', data);
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/refresh-token`, {
    refreshToken: data,
  });
};

const getGroupList = () => {
  console.log('Get group list');
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/group`, authHeader());
};

const getTopicList = (id) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${id}/topic`,
    authHeader()
  );
};

const getPostList = (groupId, topicId) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post`,
    authHeader()
  );
};

const getPost = (groupId, topicId, postId) => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}`,
    authHeader()
  );
};

const requestComment = (groupId, topicId, postId, description) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post/${postId}/comment`,
    description,
    authHeader()
  );
};

const submitPost = (groupId, topicId, data) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic/${topicId}/post`,
    data,
    authHeader()
  );
};

const submitLogout = () => {
  console.log(authHeader());
  return axiosService.get(`${REACT_APP_API_URL}/v1/api/logout`, authHeader());
};

const submitTopic = (groupId, data) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group/${groupId}/topic`,
    data,
    authHeader()
  );
};

const submitGroup = (data) => {
  return axiosService.post(
    `${REACT_APP_API_URL}/v1/api/group`,
    data,
    authHeader()
  );
};

const getUserList = () => {
  return axiosService.get(
    `${REACT_APP_API_URL}/v1/api/admin/info`,
    authHeader()
  );
};

const changeRoleUser = (id, data) => {
  return axiosService.patch(
    `${REACT_APP_API_URL}/v1/api/admin/info/${id}`,
    data,
    authHeader()
  );
};

export {
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
