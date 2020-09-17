import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_TOPIC } from '../constants';
import { submitTopic } from '../apis';
import { submitTopicSuccess, submitTopicFailed } from '../actions/index';

function* loadSubmitTopic({ groupId, data }) {
  console.log('loadSubmitTopic', groupId, data);
  const res = yield call(submitTopic, groupId, data);

  if (res.data.success) {
    yield put(submitTopicSuccess(res.data.message));
  } else if (res.data.success === false) {
    yield put(submitTopicFailed(res.data.message));
  }
}

function* submitTopicSaga() {
  yield takeEvery(SUBMIT_TOPIC.SUBMIT_TOPIC_REQUEST, loadSubmitTopic);
}

export default submitTopicSaga;
