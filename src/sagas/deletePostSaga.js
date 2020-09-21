import { takeEvery, put, call } from 'redux-saga/effects';
import { DELETE_POST } from '../constants';
import { deletePost } from '../apis';
import { deletePostSuccess, deletePostFailed } from '../actions/index';

function* callDeletePost({ groupId, topicId, id }) {
  const res = yield call(deletePost, groupId, topicId, id);
  const { data } = res;

  if (data.success === false) {
    yield put(deletePostFailed(data.message));
  } else {
    yield put(deletePostSuccess(data.message));
  }
}

function* deletePostSaga() {
  yield takeEvery(DELETE_POST.DELETE_POST_REQUEST, callDeletePost);
}

export default deletePostSaga;
