import React, {memo, useCallback, useEffect, useState} from 'react';
import TodoAddModalView, {
  TodoAddModalViewProps,
} from './views/TodoAddModalView.tsx';
import {useDispatch} from 'react-redux';
import {addTodo, editTodo} from '../action/action.ts';

type TodoAddModalProps = {
  isOpen: boolean;
  setIsOpen: any;
  page: number;
  id: number;
  content: string;
};

function TodoEditModal({
  isOpen,
  setIsOpen,
  page,
  id,
  content,
}: TodoAddModalProps): React.JSX.Element {
  const [curContent, setCurContent] = useState<string>(content);
  const dispatch = useDispatch();

  const closeModal = () => setIsOpen(false);
  const onChangeText = useCallback((text: string) => setCurContent(text), []);
  const onSubmit = () => {
    dispatch(editTodo({content:curContent, id, page: page}));
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen && setCurContent(content);
  }, [isOpen]);

  const props: TodoAddModalViewProps = {
    isOpen,
    closeModal,
    onSubmit,
    content: curContent,
    onChangeText,
    btnTitle: '수정',
  };

  return <TodoAddModalView {...props} />;
}

export default memo(TodoEditModal);
