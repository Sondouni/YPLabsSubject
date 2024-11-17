import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import todoReducer from '../reducers/todoList.ts';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(todoReducer, middleware);

export default store;

sagaMiddleware.run(rootSaga);
