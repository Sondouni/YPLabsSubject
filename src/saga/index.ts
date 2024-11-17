import { all } from 'redux-saga/effects';
import todoSaga from './todoList';

function* rootSaga() {
  yield all([...todoSaga]);
}

export default rootSaga;
