import { takeEvery, put, call } from 'redux-saga/effects';

import { LOGIN } from '../constants';
import { loginUser } from '../apis';
import { setId, setError, showLoading, hideLoading } from '../actions/index';

function* callSubmit({ email, password }) {
  yield put(showLoading());
  const res = yield call(loginUser, {
    email,
    password,
  });
  const { status } = res;
  if (status === true) {
    yield put(setId());
  } else {
    yield put(setError());
  }
  yield put(hideLoading());
}

function* submitLoginSaga() {
  yield takeEvery(LOGIN.LOAD, callSubmit);
}

export default submitLoginSaga;
