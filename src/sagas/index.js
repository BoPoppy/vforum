import loginSaga from './loginSaga';
import submitSaga from './registerSaga';
import getUserSaga from './getUserSaga';
import changePassowrdSaga from './changePasswordSaga';
import getGroupListSaga from './groupListSaga';
import getTopicListSaga from './getTopicListSaga';
import getPostListSaga from './getPostListSaga';
import getPostSaga from './getPostSaga';
import commentPostSaga from './commentPostSaga';
import submitPostSaga from './submitPostSaga';
import loadSubmitLogut from './logOutSaga';
import submitTopic from './submitTopic';
import singleTopicList from './singleTopicListSaga';
import submitGroup from './submitGroupSaga';
import getUserListSaga from './getUserListSaga';
import changeRoleUserSaga from './changeRoleUserSaga';
import deleteCommentSaga from './deleteCommentSaga';
import getAllCommentSaga from './getAllCommentSaga';
import updateCommentSaga from './updateCommentSaga';
import deleteUserSaga from './deleteUserSaga';
import deleteGroupSaga from './deleteGroupSaga';
import updateGroupSaga from './updateGroupSaga';
import deleteTopicSaga from './deleteTopicSaga';
import updateTopicSaga from './updateTopicSaga';
import deletePostSaga from './deletePostSaga';
import updatePostSaga from './updatePostSaga';

import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    fork(deleteTopicSaga),
    fork(updateTopicSaga),
    fork(deletePostSaga),
    fork(updatePostSaga),
    fork(deleteGroupSaga),
    fork(updateGroupSaga),
    fork(deleteUserSaga),
    fork(updateCommentSaga),
    fork(getAllCommentSaga),
    fork(deleteCommentSaga),
    fork(submitSaga),
    fork(loginSaga),
    fork(getUserSaga),
    fork(changePassowrdSaga),
    fork(getGroupListSaga),
    fork(getTopicListSaga),
    fork(getPostListSaga),
    fork(getPostSaga),
    fork(commentPostSaga),
    fork(submitPostSaga),
    fork(loadSubmitLogut),
    fork(submitTopic),
    fork(submitGroup),
    fork(singleTopicList),
    fork(getUserListSaga),
    fork(changeRoleUserSaga),
  ]);
}

export default rootSaga;
