import React, {FC, memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCuisineCell} from '../../../../hooks';
import {Props} from './props';

import styles from './styles';

const CuisineCell: FC<Props> = ({id}) => {
  const {
    cuisineData: {numberOfPlaces, cuisineName, cuisineImage},
    handlePressCuisineCell,
  } = useCuisineCell(id);

  return (
    <Pressable
      onPress={handlePressCuisineCell}
      style={[styles.mainContainer, styles.shadow]}
      testID="cuisineCell">
      <FastImage
        source={{
          uri: cuisineImage,
        }}
        style={styles.imageBackground}>
        <View style={styles.contentContainer}>
          <Text style={styles.mediumBlackText}>{cuisineName}</Text>
          <Text style={styles.regularGrayText}>{numberOfPlaces} places</Text>
        </View>
      </FastImage>
    </Pressable>
  );
};

export default memo(CuisineCell);
