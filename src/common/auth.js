function getAuthToken() {
  return JSON.parse(localStorage.getItem('storage'));
}

function setAuthToken(token) {
  localStorage.setItem('storage', JSON.stringify(token));
}

function removeAuthToken() {
  localStorage.removeItem('storage');
}

export { getAuthToken, setAuthToken, removeAuthToken };
