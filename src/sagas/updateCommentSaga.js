import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_COMMENT } from '../constants';
import { updateComment, getAllComment, getPost } from '../apis';
import {
  updateCommentSuccess,
  updateCommentFailed,
  getAllCommentSuccess,
  successPost,
} from '../actions/index';

function* callUpdateComment({ groupId, topicId, postId, id, data }) {
  const res = yield call(updateComment, groupId, topicId, postId, id, data);
  const result = res.data;

  if (result.success === false) {
    yield put(updateCommentFailed(result.message));
  } else {
    yield put(updateCommentSuccess(result.message));
    const newPost = yield call(getPost, groupId, topicId, postId);

    yield put(successPost(newPost.data.result[0]));
    const allComment = yield call(getAllComment, groupId, topicId, postId);
    yield put(getAllCommentSuccess(allComment.data.result));
  }
}

function* updateCommentSaga() {
  yield takeEvery(UPDATE_COMMENT.UPDATE_COMMENT_REQUEST, callUpdateComment);
}

export default updateCommentSaga;
