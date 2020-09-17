import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGOUT } from '../constants';
import { submitLogout } from '../apis';
import { logOut } from '../actions/index';

function* loadSubmitLogut() {
  console.log('sagaLogout');
  const res = yield call(submitLogout);
  console.log(res);
  yield put(logOut());
}

function* submitLogutSaga() {
  yield takeEvery(LOGOUT.SUBMIT, loadSubmitLogut);
}

export default submitLogutSaga;
