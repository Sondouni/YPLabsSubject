import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import Button from '../Button.tsx';
import FeaterIcon from 'react-native-vector-icons/Feather';

export type TodoAddModalViewProps = {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: () => void;
  content: string;
  btnTitle?: string;
  onChangeText: (text: string) => void;
};

function TodoAddModalView({
  isOpen,
  closeModal,
  content,
  btnTitle = '작성',
  onChangeText,
  onSubmit,
}: TodoAddModalViewProps): React.JSX.Element {
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        // onTouchStart={() => Keyboard.dismiss()}
      >
        <View
          style={{
            width: '90%',
            backgroundColor: '#FFF',
            height: 500,
            borderRadius: 20,
            padding: 20,
          }}>
          <Pressable
            onPress={closeModal}
            style={{
              alignSelf: 'flex-end',
              width: 25,
              height: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FeaterIcon name={'x'} size={25} color={'#000'} />
          </Pressable>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: '100%',
              }}
              value={content}
              onChangeText={onChangeText}
              allowFontScaling={false}
              multiline={true}
              textAlignVertical={'top'}
              placeholder={'todo를 입력해주세요.'}
              // returnKeyType={'done'}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={200}>
            <Button
              title={btnTitle}
              onPress={onSubmit}
              disabled={content === ''}
              style={{
                maxWidth:100
              }}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
}

export default TodoAddModalView;
