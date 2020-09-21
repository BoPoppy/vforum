import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_TOPIC } from '../constants';
import { submitTopic, getTopicList } from '../apis';
import {
  submitTopicSuccess,
  submitTopicFailed,
  successSingleTopicList,
} from '../actions/index';

function* loadSubmitTopic({ groupId, data }) {
  console.log('loadSubmitTopic', groupId, data);
  const res = yield call(submitTopic, groupId, data);

  if (res.data.success === true) {
    yield put(submitTopicSuccess(res.data.message));
    const newTopicList = yield call(getTopicList, groupId);
    yield put(successSingleTopicList(newTopicList.data.result));
  } else if (res.data.success === false) {
    yield put(submitTopicFailed(res.data.message));
  }
}

function* submitTopicSaga() {
  yield takeEvery(SUBMIT_TOPIC.SUBMIT_TOPIC_REQUEST, loadSubmitTopic);
}

export default submitTopicSaga;
