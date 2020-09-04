import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTER } from '../constants';
import { registerUser } from '../apis';
import { registerSuccess, registerFail } from '../actions';

function* callSubmit({ email, password, display_name, gender }) {
  const res = yield call(registerUser, {
    email,
    password,
    display_name,
    gender,
  });
  const { data, status } = res;
  if (status === 201) {
    yield put(registerSuccess(data));
  } else {
    yield put(registerFail(data));
  }
}

function* submitSaga() {
  yield takeEvery(REGISTER.REQUEST, callSubmit);
}

export default submitSaga;
