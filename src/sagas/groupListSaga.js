import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_GROUP_LIST } from '../constants';
import { getGroupList } from '../apis';
import { successGroupList } from '../actions';

function* loadGroupList() {
  const res = yield call(getGroupList);
  const { data } = res;
  yield put(successGroupList(data.result));
}

function* getGroupListSaga() {
  yield takeEvery(GET_GROUP_LIST.REQUEST_GROUP_LIST, loadGroupList);
}

export default getGroupListSaga;
