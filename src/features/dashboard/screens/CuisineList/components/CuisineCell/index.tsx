import React, {FC, memo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useCuisineCell} from '../../../../hooks';
import {Props} from './types';

import styles from './styles';

const CuisineCell: FC<Props> = ({id}) => {
  const {
    cuisineData: {numberOfPlaces, cuisineName, cuisineImage},
    handlePressCuisineCell,
  } = useCuisineCell(id);

  return (
    <Pressable onPress={handlePressCuisineCell}>
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
    </Pressable>
  );
};

export default memo(CuisineCell);
