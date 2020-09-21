import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_GROUP } from '../constants';
import { updateGroup } from '../apis';
import { updateGroupSuccess, updateGroupFailed } from '../actions/index';

function* callUpdateGroup({ id, data }) {
  const res = yield call(updateGroup, id, data);
  const result = res.data;

  if (result.success === false) {
    yield put(updateGroupFailed(result.message));
  } else {
    yield put(updateGroupSuccess(result.message));
  }
}

function* updateGroupSaga() {
  yield takeEvery(UPDATE_GROUP.UPDATE_GROUP_REQUEST, callUpdateGroup);
}

export default updateGroupSaga;
