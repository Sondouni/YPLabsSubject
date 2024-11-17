import React from 'react';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigator/StackNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';

function App(): React.JSX.Element {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
