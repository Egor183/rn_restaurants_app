import React, {FC, memo} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useCuisineCell} from '../../../../hooks';
import {Props} from './types';

import styles from './styles';

const CuisineCell: FC<Props> = ({id}) => {
  const {numberOfPlaces, cuisineName, cuisineImage} = useCuisineCell(id);

  return (
    <ImageBackground
      source={{
        uri: cuisineImage,
      }}
      style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.mediumBlackText}>{cuisineName}</Text>
        <Text style={styles.regularGrayText}>{numberOfPlaces} places</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(CuisineCell);
