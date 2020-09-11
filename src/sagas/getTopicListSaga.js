import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { GET_TOPIC_LIST } from '../constants';
import { getTopicList } from '../apis';
import { successTopicList } from '../actions';

function* loadTopicList({ id }) {
  const res = yield call(getTopicList, id);
  const { data } = res;
  yield put(successTopicList(data));
}

function* getTopicListSaga() {
  yield takeEvery(GET_TOPIC_LIST.REQUEST_TOPIC_LIST, loadTopicList);
}

export default getTopicListSaga;
