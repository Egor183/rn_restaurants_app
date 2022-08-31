import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {Props} from './props';

import styles from './styles';

const BlueBadge: FC<Props> = ({
  mainText,
  additionalText,
  containerStyles,
  mainTextStyles,
}) => (
  <View style={[styles.containerStyles, containerStyles]}>
    <Text style={[styles.mainTextStyles, mainTextStyles]}>{mainText}</Text>
    {additionalText ? (
      <Text style={styles.additionalTextStyles}>{additionalText}</Text>
    ) : null}
  </View>
);

export default memo(BlueBadge);
