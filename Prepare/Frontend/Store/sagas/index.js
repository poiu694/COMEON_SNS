import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";


export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}

/**
 * all : 모두 실행
 * 
 * call vs fork
 * call : 동기 호출
 * fork : 비동기 호출
 *
 * take : 1회성
 * takeEvery : 계속
 * takeLatest : 요청은 다 하지만, 마지막 응답만 받고 실행 (응답을 마지막 것만 받음)
 * takeLeading : 요청은 다 하지만, 처음 응답만 받고 실행 (응받을 처음 것만 받음)
 */
