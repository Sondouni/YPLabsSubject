import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import FeaterIcon from 'react-native-vector-icons/Feather';

export type HeaderViewProps = {
  title: string;
  backBtn: boolean;
  onBackBtn: () => void;
};

function HeaderView({
  title,
  backBtn,
  onBackBtn,
}: HeaderViewProps): React.JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
      }}>
      {backBtn && (
        <Pressable
          onPress={onBackBtn}
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FeaterIcon name={'arrow-left'} size={25} color={'#000'} />
        </Pressable>
      )}
      <View
        style={{
          flex: 1,
          marginHorizontal: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

export default HeaderView;
