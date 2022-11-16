import { takeLatest, put, call, take } from "redux-saga/effects";
import {
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  ALL_TODO,
  ALL_TODO_SUCCESS,
  DELETE_TASK,
  DELETE_SUCCESS,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK,
} from "../../Action/todo/index";

import { API } from "../../../Api";


function* allTodoItem() {
  try {
    const response = yield call(API.allTask);
    yield put({ type: ALL_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_ITEM_FAIL, payload: error.response.data });
  }
}


function* addTodoItem(action) {
  try {
    const response = yield call(API.addTask, action.payload);
    yield put({ type: ADD_ITEM_SUCCESS, payload: response.data });
    action.cb && action.cb();
  } catch (error) {
    yield put({ type: ADD_ITEM_FAIL, payload: error.response.data });
  }
}

function* updateTask(action) {
  try {
    const response = yield call(API.update, action.payload);
    yield put({ type: UPDATE_TASK_SUCCESS, payload: response.data });
    action.cb && action.cb();
  } catch (error) {
    yield put({ type: ADD_ITEM_FAIL, payload: error.response.data });
  }
}

function* deleteTask(action) {
  try {
    const response = yield call(API.deleteTask, action.payload);
    yield put({ type: DELETE_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({ type: ADD_ITEM_FAIL, payload: error.response.data });
  }
}


function* TodoSaga() {
  yield takeLatest(ALL_TODO, allTodoItem);
  yield takeLatest(ADD_ITEM, addTodoItem);
  yield takeLatest(UPDATE_TASK, updateTask);
  yield takeLatest(DELETE_TASK, deleteTask);
}

export default TodoSaga;
