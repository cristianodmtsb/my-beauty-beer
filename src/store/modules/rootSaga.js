import { all } from "redux-saga/effects";

import favorite from "./Favorite/sagas";

export default function* rootSaga() {
  return yield all([favorite]);
}
