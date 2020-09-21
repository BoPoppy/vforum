import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_TOPIC } from '../constants';
import { updateTopic } from '../apis';
import { updateTopicSuccess, updateTopicFailed } from '../actions/index';

function* callUpdateTopic({ groupId, id, data }) {
  const res = yield call(updateTopic, groupId, id, data);
  const result = res.data;

  if (result.success === false) {
    yield put(updateTopicFailed(result.message));
  } else {
    yield put(updateTopicSuccess(result.message));
  }
}

function* updateTopicSaga() {
  yield takeEvery(UPDATE_TOPIC.UPDATE_TOPIC_REQUEST, callUpdateTopic);
}

export default updateTopicSaga;
