import React, {memo, useEffect, useMemo, useState} from 'react';
import TodoCardView, {TodoCardViewProps} from './views/TodoCardView.tsx';
import {getDate, setIsDone} from '../Utils.ts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigator/StackNavigator.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {delTodo} from '../action/action.ts';

type TodoCardProps = {
  content: string;
  create_at: string;
  update_at: string;
  id: number;
  isDone: boolean;
  pageRef: any;
};

function TodoCard({
  content,
  id,
  isDone,
  create_at,
  update_at,
  pageRef,
}: TodoCardProps): React.JSX.Element {
  const [isCurDone, setIsCurDone] = useState(isDone);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    setIsCurDone(isDone);
  }, [isDone]);

  const dispatch = useDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onDoneChange = async () => {
    setIsCurDone(state => !state);
    await setIsDone(id, !isCurDone);
  };

  const onDelPress = async () => {
    dispatch(delTodo(id, pageRef.current));
  };

  const onEditPress = async () => {
    setOpenEditModal(true);
  };

  const onPress = () =>
    navigation.navigate('TodoDetailPage', {
      id,
      page: pageRef.current,
      isDone: isCurDone,
    });

  const props: TodoCardViewProps = {
    content,
    id,
    time: getDate(update_at === create_at ? create_at : update_at),
    isCurDone,
    onDoneChange,
    onDelPress,
    onEditPress,
    onPress,
    isOpen: openEditModal,
    setIsOpen: setOpenEditModal,
    pageRef: pageRef,
  };

  return <TodoCardView {...props} />;
}

export default memo(TodoCard);
