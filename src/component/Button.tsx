import React, {memo} from 'react';
import {ViewStyle} from 'react-native';
import ButtonView from './views/ButtonView.tsx';

type ButtonProps = {
  title: string;
  style?: ViewStyle;
  disabled?: boolean;
  onPress: () => void;
};

function Button(props: ButtonProps): React.JSX.Element {

  return <ButtonView {...props} />;
}

export default memo(Button);
