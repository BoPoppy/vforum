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

function getLikePost() {
  return JSON.parse(localStorage.getItem('likePost'));
}

function getLikeCommentPost() {
  return JSON.parse(localStorage.getItem('likeCommentPost'));
}

function setAuthToken({
  accessToken,
  refreshToken,
  userId,
  role,
  likePost,
  likeCommentPost,
}) {
  localStorage.setItem('accessToken', JSON.stringify(accessToken));
  localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
  localStorage.setItem('userId', JSON.stringify(userId));
  localStorage.setItem('role', JSON.stringify(role));
  localStorage.setItem('likePost', JSON.stringify(likePost));
  localStorage.setItem('likeCommentPost', JSON.stringify(likeCommentPost));
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
  localStorage.removeItem('likePost');
  localStorage.removeItem('likeCommentPost');
}

function refreshNewToken() {
  const storage = getAuthToken();
  const data = refreshToken(storage.refreshToken);

  return data;
}

export {
  getLikePost,
  getLikeCommentPost,
  getUserRole,
  setNewAuth,
  getRefreshToken,
  getUserId,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  refreshNewToken,
};
