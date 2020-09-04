import { LOGIN, REGISTER, LOADING } from '../constants';

const loadId = () => ({
  type: LOGIN.LOAD,
});

const setId = (id) => ({
  type: LOGIN.LOAD_SUCCESS,
  id,
});

const setError = (error) => ({
  type: LOGIN.LOAD_FAIL,
  error,
});

const registerRequest = () => ({
  type: REGISTER.REQUEST,
});

const registerSuccess = (email, password, display_name, gender) => ({
  type: REGISTER.REQUEST_SUCCESS,
  email,
  password,
  display_name,
  gender,
});

const registerFail = (error) => ({
  type: REGISTER.REQUEST_FAIL,
  error,
});

const showLoading = () => ({
  type: LOADING.SHOW_LOADING,
});

const hideLoading = () => ({
  type: LOADING.HIDE_LOADING,
});

export {
  loadId,
  setId,
  setError,
  registerFail,
  registerSuccess,
  registerRequest,
  showLoading,
  hideLoading,
};
