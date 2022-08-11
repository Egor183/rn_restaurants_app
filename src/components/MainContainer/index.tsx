import React, {memo, ReactNode} from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {GLOBAL} from '@src/constants';

import styles from './styles';

type Props = {
  children: ReactNode;
  edges?: Edge[];
  backgroundColor?: string;
};

const MainContainer: React.FC<Props> = ({
  children,
  edges = [GLOBAL.EDGES.LEFT, GLOBAL.EDGES.RIGHT],
  backgroundColor,
}) => (
  <SafeAreaView style={[styles.mainContainer, {backgroundColor}]} edges={edges}>
    {children}
  </SafeAreaView>
);

export default memo(MainContainer);
