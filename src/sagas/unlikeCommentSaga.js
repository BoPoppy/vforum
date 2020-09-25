import { takeEvery, put, call } from 'redux-saga/effects';
import { UNLIKE_COMMENT } from '../constants';
import { unlikeComment, getAllComment } from '../apis';
import {
  successUnlikeComment,
  failedUnlikeComment,
  getAllCommentSuccess,
} from '../actions/index';

function* callunlikeComment({ groupId, topicId, postId, id }) {
  const res = yield call(unlikeComment, groupId, topicId, postId, id);
  const { data } = res;

  if (data.error) {
    yield put(failedUnlikeComment(data));
  } else {
    yield put(successUnlikeComment(data));
    const newPost = yield call(getAllComment, groupId, topicId, postId);
    yield put(getAllCommentSuccess(newPost.data.result));
  }
}

function* unlikeCommentSaga() {
  yield takeEvery(UNLIKE_COMMENT.UNLIKE_COMMENT_REQUEST, callunlikeComment);
}

export default unlikeCommentSaga;
