import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_TOPIC_LIST } from '../constants';
import { getTopicList } from '../apis';
import { successSingleTopicList } from '../actions';

function* loadTopicListSingle({ groupId }) {
  const res = yield call(getTopicList, groupId);
  const { data } = res;
  yield put(successSingleTopicList(data.result));
}

function* getTopicListSingleSaga() {
  yield takeEvery(
    GET_TOPIC_LIST.REQUEST_TOPIC_LIST_SINGLE,
    loadTopicListSingle
  );
}

export default getTopicListSingleSaga;
