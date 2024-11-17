import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../component/Header.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, Switch, Text, View} from 'react-native';
import Button from '../component/Button.tsx';
import TodoEditModal from '../component/TodoEditModal.tsx';
import {delTodo} from '../action/action.ts';
import {useNavigation} from '@react-navigation/native';
import {setIsDone} from '../Utils.ts';

function TodoDetailPage({route}): React.JSX.Element {
  const navigation = useNavigation();
  const {id, page, isDone} = route.params;

  const [content, setContent] = useState('');
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isCurDone, setIsCurDone] = useState(isDone);

  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    todoList?.forEach(todo => {
      if (todo.id === id) {
        setContent(todo.content);
      }
    });
  }, [todoList]);

  const changeToggle = async () => {
    setIsCurDone(state => !state);
    await setIsDone(id, !isCurDone);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header title={'Todo Detail'} />
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          bounces={false}
          contentContainerStyle={{
            padding: 20,
          }}>
          <Text>{content}</Text>
        </ScrollView>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginBottom: 10,
        }}>
        <Switch value={isCurDone} style={{}} onValueChange={changeToggle} />
      </View>
      <Button
        title={'수정'}
        style={{
          maxWidth: 300,
        }}
        onPress={() => setOpenEditModal(true)}
      />
      <Button
        title={'삭제'}
        style={{marginTop: 10, maxWidth: 300}}
        onPress={() => {
          dispatch(delTodo(id, page));
          navigation.goBack();
        }}
      />
      <TodoEditModal
        isOpen={openEditModal}
        setIsOpen={setOpenEditModal}
        page={page}
        content={content}
        id={id}
      />
    </SafeAreaView>
  );
}

export default TodoDetailPage;
