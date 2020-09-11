import { refreshToken } from '../apis';

function getAuthToken() {
  return JSON.parse(localStorage.getItem('storage'));
}

function setAuthToken(token) {
  localStorage.setItem('storage', JSON.stringify(token));
}

function removeAuthToken() {
  localStorage.removeItem('storage');
}

function authHeader() {
  // return authorization header with basic auth credentials
  let user = getAuthToken();

  if (user && user.accessToken) {
    return { headers: { Authorization: `Bearer ${user.accessToken}` } };
  } else {
    return {};
  }
}

function refreshNewToken() {
  const storage = getAuthToken();
  const data = refreshToken(storage.refreshToken);

  return data;
}

export {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  authHeader,
  refreshNewToken,
};
