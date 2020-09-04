import axiosService from '../common/axiosService';

const REACT_APP_API_URL = 'http://localhost:3000';
const url = 'register';

const fetchUser = async (data) => {
  try {
    const res = await fetch(`${REACT_APP_API_URL}/v1/api/signup`, {
      method: 'POST',
      headers: {},
      body: JSON.stringify(data),
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    throw new Error(error);
  }
};

const registerUser = (data) => {
  return axiosService.post(`${REACT_APP_API_URL}/${url}`, data);
};

export { fetchUser, registerUser };
