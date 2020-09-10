import {
  LOGIN,
  REGISTER,
  LOADING,
  MESSAGE,
  LOGOUT,
  INFO,
  CHANGE_PASSWORD,
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
  requestInfo,
  requestInfoFailed,
  requestInfoSuccess,
  requestChangePassword,
  changePasswordFailed,
  changePasswordSuccess,
  refreshChangePassword,
};
