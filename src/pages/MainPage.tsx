import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, RefreshControl, View} from 'react-native';
import {getTodoList} from '../action/action.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import TodoCard from '../component/TodoCard.tsx';
import Header from '../component/Header.tsx';
import Button from '../component/Button.tsx';
import TodoAddModal from '../component/TodoAddModal.tsx';
import {getIsDone, getIsDone2} from '../Utils.ts';
import {useIsFocused} from '@react-navigation/native';

function MainPage(): React.JSX.Element {
  const todoList = useSelector(state => state.todoList);
  const isLast = useSelector(state => state.isLast);

  const dispatch = useDispatch();

  const [openAddModal, setOpenAddModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const pageRef = useRef<number>(1);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      dispatch(getTodoList(pageRef.current));
    }
  }, [isFocused]);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [todoList]);

  const renderTodo = useCallback(async ({item}: any) => {
    const isDone = await getIsDone(item.id);
    return (
      <TodoCard
        content={item.content}
        create_at={item.create_at}
        update_at={item.update_at}
        id={item.id}
        isDone={isDone}
        pageRef={pageRef}
      />
    );
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header title={'TodoList'} backBtn={false} />
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          keyExtractor={item => {
            return `${item.id}`;
          }}
          data={todoList}
          renderItem={renderTodo}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          ItemSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: '#000'}} />
          )}
          onEndReached={() => {
            if (todoList.length > 0 && !isLast) {
              pageRef.current += 1;
              dispatch(getTodoList(pageRef.current));
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => {
                setRefresh(true);
                dispatch(getTodoList(1));
                pageRef.current = 1;
              }}
            />
          }
        />
      </View>
      {/*<Header title={'TodoList'} />*/}
      <Button title={'TODO 추가하기'} onPress={() => setOpenAddModal(true)} style={{
        maxWidth:300
      }} />
      <TodoAddModal
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        pageRef={pageRef}
      />
    </SafeAreaView>
  );
}

export default MainPage;
