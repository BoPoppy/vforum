import { takeEvery, put, call } from 'redux-saga/effects';

import { LOGIN } from '../constants';
import { loginUser } from '../apis';
import { setId, setError, showLoading, hideLoading } from '../actions/index';

function* callSubmit({ email, password }) {
  console.log('sagaLogin', email, password);
  yield put(showLoading());
  const res = yield call(loginUser, {
    email,
    password,
  });
  const { data } = res.data;
  if (data === 1) {
    console.log('login successful');
    yield put(setId());
  } else if (data === 2) {
    console.log('incorrect password');
    yield put(setError());
  } else if (data === 3) {
    console.log('incorrect email');
    yield put(setError());
  }
  yield put(hideLoading());
}

function* submitLoginSaga() {
  yield takeEvery(LOGIN.LOAD, callSubmit);
}

export default submitLoginSaga;
