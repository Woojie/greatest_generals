import { fork, all } from "redux-saga/effects";
import { watchActiveGeneral } from "./activeGeneral";


export function* rootSaga () {
  yield all([
    fork(watchActiveGeneral)
  ])
}
