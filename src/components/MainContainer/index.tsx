import React, {FC, memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, EDGES} from '@src/constants';
import Header from '../Header';
import {Props} from './types';

import styles from './styles';

const MainContainer: FC<Props> = ({
  children,
  edges = [EDGES.LEFT, EDGES.RIGHT],
  backgroundColor = COLORS.WHITE,
  withPaddingHorizontal = true,
  leftComponent,
  title,
  rightComponent,
  withHeader = true,
}) => (
  <SafeAreaView
    style={[
      styles.mainContainer,
      {backgroundColor},
      withPaddingHorizontal && styles.paddingHorizontal,
    ]}
    edges={edges}>
    {withHeader && (
      <Header
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        title={title}
      />
    )}
    {children}
  </SafeAreaView>
);

export default memo(MainContainer);
