import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { INFO } from '../constants';
import { getUserInfo } from '../apis';
import { showLoading, hideLoading, requestInfoSuccess } from '../actions';
import { setAuthToken, refreshNewToken } from '../common/auth';

function* loadUser() {
  console.log('get user saga');
  yield put(showLoading());
  // const token = yield call(refreshNewToken);
  // const tokenData = token.data;
  // yield setAuthToken({
  //   accessToken: tokenData.accessToken,
  //   refreshToken: tokenData.refreshTokenFromClient,
  // });

  delay(3000);
  const res = yield call(getUserInfo);
  const { result } = res.data;
  yield put(
    requestInfoSuccess(
      result.display_name,
      result.email,
      result.gender,
      result.role,
      result._id
    )
  );
  yield put(hideLoading());
}

function* getUser() {
  yield takeEvery(INFO.LOAD_INFO, loadUser);
}

export default getUser;
