import React, {memo, useCallback, useEffect, useState} from 'react';
import TodoAddModalView, {
  TodoAddModalViewProps,
} from './views/TodoAddModalView.tsx';
import {useDispatch} from 'react-redux';
import {addTodo} from '../action/action.ts';

type TodoAddModalProps = {
  isOpen: boolean;
  setIsOpen: any;
  pageRef: any;
};

function TodoAddModal({
  isOpen,
  setIsOpen,
  pageRef,
}: TodoAddModalProps): React.JSX.Element {
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch();

  const closeModal = () => setIsOpen(false);
  const onChangeText = useCallback((text: string) => setContent(text), []);
  const onSubmit = () => {
    dispatch(addTodo({content,page:pageRef.current}));
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen && setContent('');
  }, [isOpen]);

  const props: TodoAddModalViewProps = {
    isOpen,
    closeModal,
    onSubmit,
    content,
    onChangeText,
  };

  return <TodoAddModalView {...props} />;
}

export default memo(TodoAddModal);
