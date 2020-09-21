import { takeEvery, put, call } from 'redux-saga/effects';
import { DELETE_GROUP } from '../constants';
import { deleteGroup } from '../apis';
import { deleteGroupSuccess, deleteGroupFailed } from '../actions/index';

function* callDeleteGroup({ id }) {
  const res = yield call(deleteGroup, id);
  const { data } = res;

  if (data.success === false) {
    yield put(deleteGroupFailed(data.message));
  } else {
    yield put(deleteGroupSuccess(data.message));
  }
}

function* deleteGroupSaga() {
  yield takeEvery(DELETE_GROUP.DELETE_GROUP_REQUEST, callDeleteGroup);
}

export default deleteGroupSaga;
