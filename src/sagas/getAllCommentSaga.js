import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ALL_COMMENT } from '../constants';
import { getAllComment } from '../apis';
import { getAllCommentSuccess } from '../actions';

function* loadCommentList({ groupId, topicId, postId }) {
  const res = yield call(getAllComment, groupId, topicId, postId);
  const { data } = res;
  yield put(getAllCommentSuccess(data.result));
}

function* getCommentListSaga() {
  yield takeEvery(GET_ALL_COMMENT.GET_ALL_COMMENT_REQUEST, loadCommentList);
}

export default getCommentListSaga;
