import React, {memo} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.loaderText}>Loading...</Text>
  </View>
);

export default memo(Loader);
