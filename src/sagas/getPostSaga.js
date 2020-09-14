import { takeEvery, call, put } from 'redux-saga/effects';
import { REQUEST_POST } from '../constants';
import { getPost } from '../apis';
import { successPost } from '../actions';

function* loadPost({ groupId, topicId, postId }) {
  const res = yield call(getPost, groupId, topicId, postId);
  const { data } = res;
  yield put(successPost(data));
}

function* getPostSaga() {
  yield takeEvery(REQUEST_POST.LOAD_POST, loadPost);
}

export default getPostSaga;
