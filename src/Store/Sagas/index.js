import { all, fork } from "redux-saga/effects";

import UserSaga from "./Auth";
import TodoSaga from "./Todo";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
  yield all([fork(TodoSaga)]);
}
