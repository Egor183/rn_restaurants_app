import React, {memo} from 'react';
import Dash from 'react-native-dash';
import {Image, Pressable, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {COLORS} from '@src/constants';
import {Icon} from '@rneui/themed';
import {
  DELIVERY_ICON_PARAMS,
  RESTAURANT_RATING_ICON_PARAMS,
} from '../../../../constants/restaurantCell';

import styles from './styles';

const RestaurantCell = () => {
  return (
    <Shadow offset={[0, 3]} distance={2}>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRuy3n0TF6VhWwmBcbOe4K32ADy5nvwBnqYihRFqBWSFloW7jtzzJPRcTblCh1gKwRdM&usqp=CAU',
          }}
          style={styles.mainContainer}
        />
        <View style={styles.contentContainer}>
          <View style={styles.restaurantInfoContainer}>
            <Text style={styles.mediumBlackText}>cuisineName</Text>
            <Text style={styles.regularGrayText}>cuisineName</Text>
          </View>
          <View style={styles.deliveryTimeContainer}>
            <Text style={styles.mediumBlueText}>30 - 40</Text>
            <Text style={styles.regularBlueText}>min</Text>
          </View>
        </View>
        <Dash
          dashThickness={1}
          dashGap={3}
          dashColor={COLORS.DARK_GRAY}
          dashLength={4}
        />
        <View style={styles.deliveryInformationContainer}>
          <Icon {...DELIVERY_ICON_PARAMS} />
          <Text style={styles.regularGrayText}>
            &nbsp;&nbsp;$2.90&nbsp;&nbsp;&#183;&nbsp;&nbsp;
          </Text>
          <Icon {...RESTAURANT_RATING_ICON_PARAMS.GOOD} />
          <Text style={styles.regularGrayText}>&nbsp;&nbsp;8.6</Text>
        </View>
      </Pressable>
    </Shadow>
  );
};

export default memo(RestaurantCell);
