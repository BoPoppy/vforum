import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_ROLE } from '../constants';
import { changeRoleUser } from '../apis';
import { updateRoleSuccess, updateRoleFailed } from '../actions/index';

function* callChangeRole({ id, data }) {
  console.log('change role', id, data);

  const res = yield call(changeRoleUser, id, data);

  if (res.data.success === true) {
    yield put(updateRoleSuccess(res.data.message));
  } else {
    yield put(updateRoleFailed(res.data.message));
  }
}

function* submitChangeRoleSaga() {
  yield takeEvery(UPDATE_ROLE.UPDATE_ROLE_REQUEST, callChangeRole);
}

export default submitChangeRoleSaga;
