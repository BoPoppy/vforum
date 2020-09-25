import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN } from '../constants';
import history from '../common/history';
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
  if (data.success === false) {
    yield put(setError());
    yield put(showMessage(3, data.message));
  } else {
    yield setAuthToken({
      accessToken: data.result.accessToken,
      refreshToken: data.result.refreshToken,
      userId: data.result.userId,
      role: data.result.role,
      likePost: data.result.likePost,
      likeCommentPost: data.result.likeCommentPost,
    });
    yield put(setId());
    yield history.push('/vforum');
    yield window.location.reload();
  }
  yield put(hideLoading());
}

function* submitLoginSaga() {
  yield takeEvery(LOGIN.LOAD, callSubmit);
}

export default submitLoginSaga;
