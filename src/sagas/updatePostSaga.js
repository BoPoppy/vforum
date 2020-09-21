import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_POST } from '../constants';
import { updatePost } from '../apis';
import { updatePostSuccess, updatePostFailed } from '../actions/index';

function* callUpdatePost({ groupId, topicId, id, data }) {
  const res = yield call(updatePost, groupId, topicId, id, data);
  const result = res.data;

  if (result.success === false) {
    yield put(updatePostFailed(result.message));
  } else {
    yield put(updatePostSuccess(result.message));
  }
}

function* updatePostSaga() {
  yield takeEvery(UPDATE_POST.UPDATE_POST_REQUEST, callUpdatePost);
}

export default updatePostSaga;
