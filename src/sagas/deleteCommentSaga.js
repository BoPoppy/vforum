import { takeEvery, put, call } from 'redux-saga/effects';
import { DELETE_COMMENT } from '../constants';
import { deleteComment, getAllComment, getPost } from '../apis';
import {
  deleteCommentSuccess,
  deleteCommentFailed,
  getAllCommentSuccess,
  successPost,
} from '../actions/index';

function* callDeleteComment({ groupId, topicId, postId, id }) {
  const res = yield call(deleteComment, groupId, topicId, postId, id);
  const { data } = res;

  if (data.success === false) {
    yield put(deleteCommentFailed(data.message));
  } else {
    yield put(deleteCommentSuccess(data.message));
    const newPost = yield call(getPost, groupId, topicId, postId);

    yield put(successPost(newPost.data.result[0]));
    const allComment = yield call(getAllComment, groupId, topicId, postId);
    yield put(getAllCommentSuccess(allComment.data.result));
  }
}

function* deleteCommentSaga() {
  yield takeEvery(DELETE_COMMENT.DELETE_COMMENT_REQUEST, callDeleteComment);
}

export default deleteCommentSaga;
