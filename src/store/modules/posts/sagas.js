import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { listPostSuccess } from "./actions";

function* listPosts() {
  const response = yield call(api.get, "/posts");

  yield put(listPostSuccess(response.data));
}

function* showPost({ id }) {
  const response = yield call(api.get, `/posts/${id}`);

  yield put(listPostSuccess(response.data));
}

export default all([
  takeLatest("@posts/REQUEST", listPosts),
  takeLatest("@post/SHOW_REQUEST", showPost)
]);
