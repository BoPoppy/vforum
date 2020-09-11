import loginSaga from './loginSaga';
import submitSaga from './registerSaga';
import getUserSaga from './getUserSaga';
import changePassowrdSaga from './changePasswordSaga';
import getGroupListSaga from './groupListSaga';
import getTopicListSaga from './getTopicListSaga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    fork(submitSaga),
    fork(loginSaga),
    fork(getUserSaga),
    fork(changePassowrdSaga),
    fork(getGroupListSaga),
    fork(getTopicListSaga),
  ]);
}

export default rootSaga;
