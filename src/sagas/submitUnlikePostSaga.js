import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_UNLIKE } from '../constants';
import { submitUnlikePost, getPost } from '../apis';
import {
  successUnlikePost,
  failedUnlikePost,
  successPost,
} from '../actions/index';

function* callSubmitUnlikePost({ groupId, topicId, postId }) {
  const res = yield call(submitUnlikePost, groupId, topicId, postId);
  const { data } = res;

  if (data.error) {
    yield put(failedUnlikePost(data));
  } else {
    yield put(successUnlikePost(data));
    const newPost = yield call(getPost, groupId, topicId, postId);
    yield put(successPost(newPost.data.result[0]));
  }
}

function* submitUnlikePostSaga() {
  yield takeEvery(SUBMIT_UNLIKE.SUBMIT_UNLIKE_REQUEST, callSubmitUnlikePost);
}

export default submitUnlikePostSaga;
