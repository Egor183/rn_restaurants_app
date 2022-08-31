import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Loader: FC = () => (
  <View style={styles.container}>
    <Text style={styles.loaderText}>Loading...</Text>
  </View>
);

export default memo(Loader);
