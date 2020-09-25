import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_LIKE } from '../constants';
import { submitLikePost, getPost } from '../apis';
import {
  successSubmitLike,
  failedSubmitLike,
  successPost,
} from '../actions/index';

function* callSubmitLikePost({ groupId, topicId, postId }) {
  console.log(groupId, topicId, postId);
  const res = yield call(submitLikePost, groupId, topicId, postId);
  const { data } = res;

  if (data.error) {
    yield put(failedSubmitLike(data));
  } else {
    yield put(successSubmitLike(data));
    const newPost = yield call(getPost, groupId, topicId, postId);
    yield put(successPost(newPost.data.result[0]));
  }
}

function* submitLikePostSaga() {
  yield takeEvery(SUBMIT_LIKE.SUBMIT_LIKE_REQUEST, callSubmitLikePost);
}

export default submitLikePostSaga;
