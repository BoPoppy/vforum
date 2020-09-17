import { takeEvery, put, call } from 'redux-saga/effects';
import { UPDATE_ROLE } from '../constants';
import { changeRoleUser } from '../apis';
import { updateRoleSuccess, updateRoleFailed } from '../actions/index';

function* callChangeRole({ id, role }) {
  console.log('changePassword', id, role);

  const res = yield call(changeRoleUser, id, role);
  const { data } = res;
  if (data.success === false) {
    yield put(updateRoleSuccess(data.message));
  } else {
    yield put(updateRoleFailed(data.message));
  }
}

function* submitChangeRoleSaga() {
  yield takeEvery(UPDATE_ROLE.UPDATE_ROLE_REQUEST, callChangeRole);
}

export default submitChangeRoleSaga;
