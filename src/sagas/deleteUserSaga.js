import { takeEvery, put, call } from 'redux-saga/effects';
import { DELETE_USER } from '../constants';
import { deleteUser } from '../apis';
import { deleteUserSuccess, deleteUserFailed } from '../actions/index';

function* callDeleteUser({ id }) {
  const res = yield call(deleteUser, id);
  const { data } = res;

  if (data.success === false) {
    yield put(deleteUserFailed(data.message));
  } else {
    yield put(deleteUserSuccess(data.message));
  }
}

function* deleteUserSaga() {
  yield takeEvery(DELETE_USER.DELETE_USER_REQUEST, callDeleteUser);
}

export default deleteUserSaga;
