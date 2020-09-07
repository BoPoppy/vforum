import loginSaga from './loginSaga';
import submitSaga from './registerSaga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([fork(submitSaga), fork(loginSaga)]);
}

export default rootSaga;
