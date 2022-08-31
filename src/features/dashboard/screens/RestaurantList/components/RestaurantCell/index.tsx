import React, {FC, memo} from 'react';
import Dash from 'react-native-dash';
import {Image, Pressable, Text, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {COLORS, CURRENCY_SYMBOLS, TEXT_SYMBOLS} from '@src/constants';
import {useRestaurantCell} from '@src/features/dashboard/hooks';
import {getRestaurantRatingIconParams} from '@src/features/dashboard/helpers';
import BlueBadge from '@src/features/dashboard/components/BlueBadge';
import {DELIVERY_ICON_PARAMS} from '@src/features/dashboard/constants';
import {Props} from './props';

import styles from './styles';

const RestaurantCell: FC<Props> = ({id}) => {
  const {
    restaurantData: {
      imageUrl,
      restaurantName,
      shortDesc,
      deliveryTimeRange,
      deliveryTimeCurrency,
      rating,
      currency,
      deliveryCost,
    },
  } = useRestaurantCell(id);

  return (
    <Pressable style={[styles.container, styles.shadow]}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.restaurantInfoContainer}>
          <Text style={styles.mediumBlackText}>{restaurantName}"</Text>
          <Text style={styles.regularGrayText}>{shortDesc}</Text>
        </View>
        <BlueBadge
          mainText={deliveryTimeRange}
          additionalText={deliveryTimeCurrency}
        />
      </View>
      <View style={styles.dashContainer}>
        <Dash
          dashThickness={1}
          dashGap={3}
          dashColor={COLORS.DARK_GRAY}
          dashLength={4}
        />
      </View>
      <View style={styles.deliveryInformationContainer}>
        <Icon {...DELIVERY_ICON_PARAMS} />
        <Text style={styles.regularGrayText}>
          {TEXT_SYMBOLS.DOUBLE_SPACE}
          {CURRENCY_SYMBOLS[currency as keyof typeof CURRENCY_SYMBOLS]}
          {deliveryCost}
          {TEXT_SYMBOLS.DOUBLE_SPACE}
          {TEXT_SYMBOLS.MIDDLE_DOT}
          {TEXT_SYMBOLS.DOUBLE_SPACE}
        </Text>
        <Icon {...getRestaurantRatingIconParams(rating)} />
        <Text style={styles.regularGrayText}>
          {TEXT_SYMBOLS.DOUBLE_SPACE}
          {rating}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(RestaurantCell);
