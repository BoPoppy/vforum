import { takeEvery, put, call } from 'redux-saga/effects';
import { SUBMIT_POST } from '../constants';
import { submitPost, getPostList } from '../apis';
import {
  submitPostSuccess,
  submitPostFailed,
  successPostList,
} from '../actions/index';
function* loadSubmitPost({ groupId, topicId, data }) {
  console.log('loadSubmitPost', groupId, topicId, data);
  const res = yield call(submitPost, groupId, topicId, data);

  if (res.data.success) {
    yield put(submitPostSuccess(res.data.message));
    const postList = yield call(getPostList, groupId, topicId);
    yield put(successPostList(postList.data.result));
  } else if (res.data.success === false) {
    yield put(submitPostFailed(res.data.message));
  }
}

function* submitPostSaga() {
  yield takeEvery(SUBMIT_POST.SUBMIT_POST_REQUEST, loadSubmitPost);
}

export default submitPostSaga;
