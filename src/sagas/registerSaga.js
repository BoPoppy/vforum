import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { REGISTER } from '../constants';
import { registerUser } from '../apis';
import {
  registerSuccess,
  registerFail,
  showLoading,
  hideLoading,
  showMessage,
} from '../actions';

function* callSubmit({ email, password, display_name, gender }) {
  console.log('sagaRegister', email, password, display_name, gender);
  yield put(showLoading());
  delay(5000);
  const res = yield call(registerUser, {
    email,
    password,
    display_name,
    gender,
  });
  const { data } = res;
  console.log(data);
  if (data.success === true) {
    yield put(registerSuccess());
    yield put(showMessage(1, data.message));
  } else {
    yield put(registerFail());
    yield put(showMessage(3, data.message));
  }

  yield put(hideLoading());
}

function* submitSaga() {
  yield takeEvery(REGISTER.REQUEST, callSubmit);
}

export default submitSaga;
