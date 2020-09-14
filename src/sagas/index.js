import loginSaga from './loginSaga';
import submitSaga from './registerSaga';
import getUserSaga from './getUserSaga';
import changePassowrdSaga from './changePasswordSaga';
import getGroupListSaga from './groupListSaga';
import getTopicListSaga from './getTopicListSaga';
import getPostListSaga from './getPostListSaga';
import getPostSaga from './getPostSaga';
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
  ]);
}

export default rootSaga;
