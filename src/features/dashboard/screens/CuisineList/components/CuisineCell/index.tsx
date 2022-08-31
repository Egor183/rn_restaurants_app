import React, {memo} from 'react';
import {ImageBackground, Text, View} from 'react-native';

import styles from './styles';

const CuisineCell = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://media.istockphoto.com/photos/beautiful-panoramic-view-of-tbilisi-at-sunset-picture-id476813550?k=20&m=476813550&s=612x612&w=0&h=nkgs_znOulcr77969-rB-mQ4Tyr8qN53crzMASFZlDU=',
      }}
      style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.mediumBlackText}>Chinese</Text>
        <Text style={styles.regularGrayText}>32 places</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(CuisineCell);
