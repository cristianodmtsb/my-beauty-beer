import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { addFavoriteSuccess } from "./actions";

function* addFavorite({ id }) {
  const response = yield call(api.get, `/beers/${id}`);

  yield put(addFavoriteSuccess(response.data));
}

export default all([takeLatest("@favorite/ADD_REQUEST", addFavorite)]);
