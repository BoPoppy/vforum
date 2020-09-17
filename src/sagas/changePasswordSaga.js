import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { CHANGE_PASSWORD } from '../constants';
import { changePassword } from '../apis';
import { changePasswordFailed, changePasswordSuccess } from '../actions/index';

function* callChangePassword({ oldpassword, newpassword, renewpassword }) {
  console.log('changePassword', oldpassword, newpassword, renewpassword);
  delay(5000);
  const res = yield call(changePassword, {
    oldpassword,
    newpassword,
    renewpassword,
  });
  const { data } = res;
  if (data.success === false) {
    yield put(changePasswordFailed(data.message));
  } else {
    yield put(changePasswordSuccess(data.message));
  }
}

function* submitChangePasswordSaga() {
  yield takeEvery(CHANGE_PASSWORD.CHANGE_PASSWORD_LOAD, callChangePassword);
}

export default submitChangePasswordSaga;
