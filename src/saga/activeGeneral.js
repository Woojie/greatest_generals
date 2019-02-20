import { WATCH_ACTIVE_GENERAL, SELECT_ACTIVE_GENERAL } from "../action_creator";
import { takeLatest, put } from "redux-saga/effects";

function* selectActiveGeneral(action) {
  yield put ({
    type: SELECT_ACTIVE_GENERAL,
    id: action.id
  })
}

export function* watchActiveGeneral() {
  yield takeLatest(WATCH_ACTIVE_GENERAL, selectActiveGeneral )
}