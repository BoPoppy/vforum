import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN } from '../constants';
import { loginUser } from '../apis';
import {
  setId,
  setError,
  showLoading,
  hideLoading,
  showMessage,
} from '../actions/index';
import { setAuthToken } from '../common/auth';

function* callSubmit({ email, password }) {
  console.log('sagaLogin', email, password);
  yield put(showLoading());
  const res = yield call(loginUser, {
    email,
    password,
  });
  const { data } = res;
  console.log(data);
  if (data.code === 400) {
    yield put(setError());
    yield put(showMessage(3, data.error));
  } else {
    yield setAuthToken({
      accessToken: data.result.accessToken,
      refreshToken: data.result.refreshToken,
    });
    yield put(setId());
    yield put(showMessage(2, 'Login successfully'));
  }
  yield put(hideLoading());
}

function* submitLoginSaga() {
  yield takeEvery(LOGIN.LOAD, callSubmit);
}

export default submitLoginSaga;
