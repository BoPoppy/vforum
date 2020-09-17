import { takeEvery, put, call } from 'redux-saga/effects';
import { COMMENT_REQUEST } from '../constants';
import { requestComment, getPost } from '../apis';
import {
  showLoading,
  hideLoading,
  commentSuccess,
  commentFailed,
  successPost,
} from '../actions/index';

function* callSubmitComment({ groupId, topicId, postId, description }) {
  const dataSubmit = { description: description };

  yield put(showLoading());
  const res = yield call(requestComment, groupId, topicId, postId, dataSubmit);
  const { data } = res;

  if (data.error) {
    yield put(commentFailed());
  } else {
    yield put(commentSuccess());
    const newPost = yield call(getPost, groupId, topicId, postId);
    console.log(newPost.data.result);
    yield put(successPost(newPost.data.result[0]));
  }

  yield put(hideLoading());
}

function* submitCommentSaga() {
  yield takeEvery(COMMENT_REQUEST.COMMENT_POST_REQUEST, callSubmitComment);
}

export default submitCommentSaga;
