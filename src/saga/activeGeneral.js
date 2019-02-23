import { types } from "../action_types";
import { takeLatest, put } from "redux-saga/effects";

function* selectActiveGeneral(action) {
  yield put ({
    type: types.SELECT_ACTIVE_GENERAL,
    id: action.id
  })
}

export function* watchActiveGeneral() {
  yield takeLatest(types.WATCH_ACTIVE_GENERAL, selectActiveGeneral )
}