import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_GROUP } from '../constants';
import { submitGroup, getGroupList } from '../apis';
import {
  submitGroupSuccess,
  submitGroupFailed,
  successGroupList,
} from '../actions/index';

function* loadSubmitGroup({ data }) {
  console.log('loadSubmitGroup', data);
  const res = yield call(submitGroup, data);

  if (res.data.success) {
    yield put(submitGroupSuccess(res.data.message));
    const newGroupList = yield call(getGroupList);

    yield put(successGroupList(newGroupList.data.result));
  } else if (res.data.success === false) {
    yield put(submitGroupFailed(res.data.message));
  }
}

function* submitGroupSaga() {
  yield takeEvery(SUBMIT_GROUP.SUBMIT_GROUP_REQUEST, loadSubmitGroup);
}

export default submitGroupSaga;
