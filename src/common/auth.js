import { refreshToken } from '../apis';

function getAuthToken() {
  return JSON.parse(localStorage.getItem('accessToken'));
}

function getRefreshToken() {
  return JSON.parse(localStorage.getItem('refreshToken'));
}

function getUserId() {
  return JSON.parse(localStorage.getItem('userId'));
}

function getUserRole() {
  return JSON.parse(localStorage.getItem('role'));
}

function setAuthToken({ accessToken, refreshToken, userId, role }) {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
  localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  localStorage.setItem('userId', JSON.stringify(userId));
  localStorage.setItem('role', JSON.stringify(role));
}

function setNewAuth({ accessToken, refreshTokenFromClient }) {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
  localStorage.setItem('refreshToken', JSON.stringify(refreshTokenFromClient));
}

function removeAuthToken() {
  localStorage.removeItem('userId');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('role');
}

function refreshNewToken() {
  const storage = getAuthToken();
  const data = refreshToken(storage.refreshToken);

  return data;
}

export {
  getUserRole,
  setNewAuth,
  getRefreshToken,
  getUserId,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  refreshNewToken,
};
