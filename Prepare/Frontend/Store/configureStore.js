import { all, fork, call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";

function loginApi(data) {
  return axios.post("/api/login", data);
}

function* login(action) {
  try {
    // const res = yield call(loginApi, action.data);
    yield delay(1000);
    yield put({
      type: "LOGIN_SUCCESS",
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: "LOGIN_FAILURE",
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
      type: "LOGOUT_SUCCESS",
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: "LOGOUT_FAILURE",
      data: err.response.data,
    });
  }
}
function addPostApi(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const res = yield call(addPostApi, action.data);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: res.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* logout() {
  yield call(logout);
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", login);
}

function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logout);
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([
    // all -> 동시 실행
    fork(watchLogin), // call(watchLogin)
    fork(watchLogout), // call(watchLogout)
    fork(watchAddPost), // call(watchAddPost)
  ]);
}

/**
 * call vs fork
 * call : 동기 호출
 * fork : 비동기 호출
 *
 * take : 1회성
 * takeEvery : 계속
 * takeLatest : 요청은 다 하지만, 마지막 응답만 받고 실행 (응답을 마지막 것만 받음)
 * takeLeading : 요청은 다 하지만, 처음 응답만 받고 실행 (응받을 처음 것만 받음)
 */
