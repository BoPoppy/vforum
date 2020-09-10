import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { INFO } from '../constants';
import { getUserInfo } from '../apis';
import { showLoading, hideLoading, requestInfoSuccess } from '../actions';

function* loadUser() {
  console.log('get user saga');
  yield put(showLoading());
  delay(3000);
  const res = yield call(getUserInfo);
  const { data } = res.data;
  yield put(
    requestInfoSuccess(
      data.display_name,
      data.email,
      data.gender,
      data.role,
      data._id
    )
  );
  yield put(hideLoading());
}

function* getUser() {
  yield takeEvery(INFO.LOAD_INFO, loadUser);
}

export default getUser;
