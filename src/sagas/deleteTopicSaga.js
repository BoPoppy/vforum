import { takeEvery, put, call } from 'redux-saga/effects';
import { DELETE_TOPIC } from '../constants';
import { deleteTopic } from '../apis';
import { deleteTopicSuccess, deleteTopicFailed } from '../actions/index';

function* callDeleteTopic({ groupId, id }) {
  const res = yield call(deleteTopic, groupId, id);
  const { data } = res;

  if (data.success === false) {
    yield put(deleteTopicFailed(data.message));
  } else {
    yield put(deleteTopicSuccess(data.message));
  }
}

function* deleteTopicSaga() {
  yield takeEvery(DELETE_TOPIC.DELETE_TOPIC_REQUEST, callDeleteTopic);
}

export default deleteTopicSaga;
