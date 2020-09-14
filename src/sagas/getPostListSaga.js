import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_POST_LIST } from '../constants';
import { getPostList } from '../apis';
import { successPostList } from '../actions';

function* loadPostList({ groupId, topicId }) {
  const res = yield call(getPostList, groupId, topicId);
  const { data } = res;
  yield put(successPostList(data));
}

function* getPostListSaga() {
  yield takeEvery(GET_POST_LIST.REQUEST_POST_LIST, loadPostList);
}

export default getPostListSaga;
