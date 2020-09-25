import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_GROUP } from '../constants';
import { getGroup } from '../apis';
import { getGroupSuccess } from '../actions';

function* callGetGroup({ id }) {
  const res = yield call(getGroup, id);
  const { data } = res;
  yield put(getGroupSuccess(data.result[0]));
}

function* getGroupSaga() {
  yield takeEvery(GET_GROUP.REQUEST_GROUP, callGetGroup);
}

export default getGroupSaga;
