import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { GET_GROUP_LIST } from '../constants';
import { getGroupList } from '../apis';
import { showLoading, hideLoading, successGroupList } from '../actions';

function* loadGroupList() {
  yield put(showLoading());
  delay(3000);
  const res = yield call(getGroupList);
  const { data } = res;
  yield put(successGroupList(data));
  yield put(hideLoading());
}

function* getGroupListSaga() {
  yield takeEvery(GET_GROUP_LIST.REQUEST_GROUP_LIST, loadGroupList);
}

export default getGroupListSaga;