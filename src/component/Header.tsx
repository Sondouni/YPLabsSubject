import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import HeaderView, {HeaderViewProps} from './views/HeaderView.tsx';

type HeaderProps = {
  title: string;
  backBtn?: boolean;
};

function Header({title, backBtn = true}: HeaderProps): React.JSX.Element {
  const navigation = useNavigation();

  const onBackBtn = () => navigation.canGoBack() && navigation.goBack();

  const props: HeaderViewProps = {
    title,
    backBtn,
    onBackBtn,
  };

  return <HeaderView {...props} />;
}

export default memo(Header);
