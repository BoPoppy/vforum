import { takeEvery, call, put } from 'redux-saga/effects';
import { REGISTER } from '../constants';
import { registerUser } from '../apis';
import {
  registerSuccess,
  registerFail,
  showLoading,
  hideLoading,
} from '../actions';

function* callSubmit({ email, password, display_name, gender }) {
  console.log('sagaRegister', email, password, display_name, gender);
  yield put(showLoading());
  const res = yield call(registerUser, {
    email,
    password,
    display_name,
    gender,
  });
  const { status } = res;
  if (status === true) {
    yield put(registerSuccess());
  } else {
    console.log('Email is existed');
    yield put(registerFail());
  }
  yield put(hideLoading());
}

function* submitSaga() {
  yield takeEvery(REGISTER.REQUEST, callSubmit);
}

export default submitSaga;
