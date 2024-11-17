import React from 'react';
import {Pressable, Text, View, ViewStyle} from 'react-native';

export type ButtonViewProps = {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
};

function ButtonView({
  title,
  onPress,
  style,
  disabled = false,
}: ButtonViewProps): React.JSX.Element {
  return (
    <View
      style={[
        {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height:50,
          alignSelf:'center'
        },
        style,
      ]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={{
          backgroundColor: 'black',
          borderRadius: 10,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text style={{color: '#FFF'}}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonView;
