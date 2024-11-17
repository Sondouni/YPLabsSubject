import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from '../pages/MainPage.tsx';
import TodoDetailPage from '../pages/TodoDetailPage.tsx';

export type RootStackParamList = {
  MainPage: undefined;
  TodoDetailPage: {id:number,page:number,isDone:boolean};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="TodoDetailPage" component={TodoDetailPage} />
    </Stack.Navigator>
  );
}

export default MyStack;
