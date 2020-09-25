import { takeEvery, put, call } from 'redux-saga/effects';
import { LIKE_COMMENT } from '../constants';
import { likeComment, getAllComment } from '../apis';
import {
  successLikeComment,
  failedLikeComment,
  getAllCommentSuccess,
} from '../actions/index';

function* callLikeComment({ groupId, topicId, postId, id }) {
  const res = yield call(likeComment, groupId, topicId, postId, id);
  const { data } = res;

  if (data.error) {
    yield put(failedLikeComment(data));
  } else {
    yield put(successLikeComment(data));
    const newPost = yield call(getAllComment, groupId, topicId, postId);
    yield put(getAllCommentSuccess(newPost.data.result));
  }
}

function* likeCommentSaga() {
  yield takeEvery(LIKE_COMMENT.LIKE_COMMENT_REQUEST, callLikeComment);
}

export default likeCommentSaga;
