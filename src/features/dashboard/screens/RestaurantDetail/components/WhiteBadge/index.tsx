import React, {FC, memo} from 'react';
import {Text} from 'react-native';
import {Props} from './props';

import styles from './styles';

export const WhiteBadge: FC<Props> = ({text}) => (
  <Text style={styles.badge}>{text}</Text>
);

export default memo(WhiteBadge);
