import React, {memo} from 'react';
import {Pressable, Switch, Text, View} from 'react-native';
import {todo} from '../../types/todoTypes.ts';
import Button from '../Button.tsx';
import TodoEditModal from '../TodoEditModal.tsx';

export type TodoCardViewProps = {
  content: string;
  id: number;
  pageRef: any;
  isCurDone: boolean;
  isOpen: boolean;
  time: string;
  setIsOpen: any;
  onDoneChange: () => void;
  onDelPress: () => void;
  onEditPress: () => void;
  onPress: () => void;
};

function TodoCardView({
  content,
  isCurDone,
  time,
  onDoneChange,
  onEditPress,
  onDelPress,
  onPress,
  id,
  setIsOpen,
  isOpen,
  pageRef,
}: TodoCardViewProps): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 80,
        padding: 20,
        // flex:1,
      }}>
      <Pressable
        onPress={onPress}
        style={{
          flex: 1,
          height:100,
          justifyContent:'space-between'
        }}>
        <Text numberOfLines={5}>{content}</Text>
        <View>
          <Text>{time}</Text>
        </View>
      </Pressable>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <Switch
          value={isCurDone}
          style={{marginLeft: 15}}
          onValueChange={onDoneChange}
        />
        <Button
          title={'수정'}
          style={{width: 50, height: 25, alignSelf: 'flex-end'}}
          onPress={onEditPress}
        />
        <Button
          title={'삭제'}
          style={{width: 50, height: 25, alignSelf: 'flex-end'}}
          onPress={onDelPress}
        />
      </View>
      <TodoEditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        page={pageRef.current}
        content={content}
        id={id}
      />
    </View>
  );
}

export default TodoCardView;
