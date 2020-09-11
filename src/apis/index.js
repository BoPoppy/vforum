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

export {
  registerUser,
  loginUser,
  getUserInfo,
  changePassword,
  refreshToken,
  getGroupList,
  getTopicList,
};
