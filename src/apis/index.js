import axiosService from '../common/axiosService';

const REACT_APP_API_URL = 'https://git.heroku.com/vforum.git';

const registerUser = (data) => {
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/signup`, data);
};

const loginUser = (data) => {
  return axiosService.post(`${REACT_APP_API_URL}/v1/api/login`, data);
};

export { registerUser, loginUser };
