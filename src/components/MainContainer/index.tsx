import React, {FC, memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, EDGES} from '@src/constants';
import {Props} from './props';

import styles from './styles';

const MainContainer: FC<Props> = ({
  children,
  edges = [EDGES.LEFT, EDGES.RIGHT],
  backgroundColor = COLORS.WHITE,
  withPaddingHorizontal = true,
}) => (
  <SafeAreaView
    style={[
      styles.mainContainer,
      {backgroundColor},
      withPaddingHorizontal && styles.paddingHorizontal,
    ]}
    edges={edges}>
    {children}
  </SafeAreaView>
);

export default memo(MainContainer);
