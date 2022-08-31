import React, {FC, memo} from 'react';
import {Header as ReactNativeElementsHeader} from '@rneui/themed';
import {HeaderProps as Props} from './props';

import styles from './styles';

const Header: FC<Props> = ({leftComponent, title, rightComponent}) => {
  return (
    <ReactNativeElementsHeader
      leftComponent={leftComponent}
      centerComponent={{text: title, style: styles.title}}
      rightComponent={rightComponent}
      containerStyle={styles.containerStyle}
      centerContainerStyle={styles.centerContainerStyle}
    />
  );
};

export default memo(Header);
