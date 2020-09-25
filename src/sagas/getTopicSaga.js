import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_TOPIC } from '../constants';
import { getTopic } from '../apis';
import { requestTopicSuccess } from '../actions';

function* callGetTopic({ groupId, id }) {
  const res = yield call(getTopic, groupId, id);
  const { data } = res;
  yield put(requestTopicSuccess(data.result[0]));
}

function* getTopicSaga() {
  yield takeEvery(REQUEST_TOPIC.LOAD_TOPIC, callGetTopic);
}

export default getTopicSaga;
