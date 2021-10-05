import { all, fork, call, put, takeLatest, delay } from "redux-saga/effects";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAILURE, LOGOUT_FAILURE, LOG_IN_REQUEST, LOG_OUT_REQUEST } from "../reducers/type";
import axios from "axios";

function loginApi(data) {
  return axios.post("/api/login", data);
}

function* login(action) {
  try {
    // const res = yield call(loginApi, action.data);
    console.log("SAGA_LOGIN_REQUEST");
    yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      data: err.response.data,
    });
  }
}

function logoutApi() {
  return axios.post("/api/logout");
}

function* logout() {
  try {
    // const res = yield call(logoutApi);
    yield delay(1000);
    yield put({
      type: LOGOUT_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}

export default userSaga;
