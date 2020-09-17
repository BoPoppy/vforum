import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_LIST } from '../constants';
import { getUserList } from '../apis';
import { getUserListSuccess, getUserListFailed } from '../actions';

function* loadUserList() {
  console.log('get user list');

  const res = yield call(getUserList);
  const { data } = res;
  if (data.success === true) {
    yield put(getUserListSuccess(data));
  } else {
    yield put(getUserListFailed(data));
  }
}

function* getUserListSaga() {
  yield takeEvery(GET_USER_LIST.GET_USER_LIST_REQUEST, loadUserList);
}

export default getUserListSaga;
