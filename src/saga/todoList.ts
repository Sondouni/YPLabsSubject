import {call, takeEvery, put} from 'redux-saga/effects';
import {apiDelTodo, apiGetTodoList, apiPatchTodo, apiPostTodo} from '../apis.ts';
import {ServerResponse} from 'http';
import {TodoActionType} from '../action/action.ts';
import {todo} from '../types/todoTypes.ts';

function* getList(action: any) {
  const list: todo[] = yield call(() => apiGetTodoList());

  list.sort((a, b) => b.id - a.id);
  const pagedList = list.slice(0, 10 * action.payload.page);
  // const todoList = pagedList.map(async (item)=>{
  //   const isDone = getIsDone(item.id);
  //   // const isDone = getIsDone(item.id);
  //   return {
  //     ...item,isDone
  //   }
  // })
  // const checkDoneList = pagedList()

  yield put({
    type: TodoActionType.GET_TODOLIST_SUCCESS,
    payload: {
      todoList: pagedList,
      isLast: list.length === pagedList.length,
    },
  });
}

function* postTodo(action: any) {
  const result: ServerResponse = yield call(() =>
    apiPostTodo(action.payload.content),
  );
  yield put({
    type: TodoActionType.GET_TODOLIST,
    payload: {page: action.payload.page},
  });
}

function* patchTodo(action: any) {
  const result: ServerResponse = yield call(() =>
    apiPatchTodo(action.payload),
  );
  yield put({
    type: TodoActionType.GET_TODOLIST,
    payload: {page: action.payload.page},
  });
}

function* delTodo(action: any) {
  const result: ServerResponse = yield call(() =>
    apiDelTodo(action.payload.id),
  );
  yield put({
    type: TodoActionType.GET_TODOLIST,
    payload: {page: action.payload.page},
  });
}

function* watchGetList() {
  yield takeEvery(TodoActionType.GET_TODOLIST, getList);
}

function* watchPostTodo() {
  yield takeEvery(TodoActionType.ADD_TODO, postTodo);
}

function* watchPatchTodo() {
  yield takeEvery(TodoActionType.EDIT_TODO, patchTodo);
}

function* watchDelTodo() {
  yield takeEvery(TodoActionType.DEL_TODO, delTodo);
}

export default [watchGetList(), watchPostTodo(), watchPatchTodo(), watchDelTodo()];
