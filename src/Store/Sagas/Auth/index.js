import { takeLatest, put, call } from "redux-saga/effects";
import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_FAIL,
} from "../../Action/auth/index";
import { API } from "../../../Api";

function* onRegister(action) {
  try {
    const response = yield call(API.userRegister, action.payload);
    yield put({ type: AUTH_REGISTER_SUCCESS });
    action.cb && action.cb();
  } catch (error) {
    yield put({ type: AUTH_FAIL, payload: error.response.data });
  }
}

function* onLogin(action) {
  try {
    const response = yield call(API.userLogin, action.payload);
    yield put({ type: AUTH_LOGIN_SUCCESS, payload: response.data });
    action.cb && action.cb();
  } catch (error) {
    yield put({ type: AUTH_FAIL, payload: error.response.data });
  }
}

function* UserSaga() {
  yield takeLatest(AUTH_REGISTER, onRegister);
  yield takeLatest(AUTH_LOGIN, onLogin);
}

export default UserSaga;
