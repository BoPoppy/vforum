import { LOGIN, REGISTER, LOADING, MESSAGE, LOGOUT } from '../constants';

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
  type: LOGOUT.SUBMIT,
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
  showMessage,
  hideMessage,
  logOut,
};
