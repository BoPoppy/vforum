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

import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
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
  ]);
}

export default rootSaga;
