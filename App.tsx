import React from 'react';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import todoReducer from './src/reducers/todoList.ts';
import rootSaga from './src/saga';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigator/StackNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';

function App(): React.JSX.Element {

  // const sagaMiddleware = createSagaMiddleware();
  // const middleware = applyMiddleware(sagaMiddleware);
  // const store = createStore(todoReducer, middleware);
  // sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
