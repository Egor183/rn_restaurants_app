import React, {FC, memo} from 'react';
import {StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS} from '@src/constants';
import {useBarStyle, useNavigation} from '@src/hooks';
import MainContainer from '@src/components/MainContainer';
import Header from '@src/components/Header';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import BlueBadge from '../../components/BlueBadge';
import {useRestaurantDetail} from '../../hooks/useRestaurantDetail';
import WhiteBadge from './components/WhiteBadge';
import {RestaurantDetailNativeStackNavigationNavigationType} from './types';

import styles from './styles';

const RestaurantDetail: FC = () => {
  const {
    restaurantData: {
      imageUrl,
      deliveryCost,
      minOrder,
      restaurantName,
      shortDesc,
      rating,
      speciality,
      restaurantRatingDescription,
    },
  } = useRestaurantDetail();
  const {goBack} =
    useNavigation<RestaurantDetailNativeStackNavigationNavigationType>();
  const barStyle = useBarStyle();

  return (
    <MainContainer withPaddingHorizontal={false}>
      <View style={[styles.headerContainer, styles.ph24]}>
        <Header
          leftComponent={
            <ButtonBack iconColor={COLORS.WHITE} onPress={goBack} />
          }
          containerStyle={styles.containerStyle}
        />
        <StatusBar barStyle={barStyle} />
      </View>
      <FastImage
        source={{
          uri: imageUrl,
        }}
        style={styles.imageBackground}>
        <View style={[styles.whiteBadgeContainer, styles.ph24]}>
          <View style={styles.mr10}>
            <WhiteBadge text={`Delivery: ${deliveryCost}`} />
          </View>
          <WhiteBadge text={`MIN. ORDER: ${minOrder.toFixed(2)}`} />
        </View>
      </FastImage>
      <View style={styles.ph24}>
        <Text style={styles.mediumBlackText}>{restaurantName}</Text>
        <Text style={[styles.regularGrayText, styles.mt10]}>{shortDesc}</Text>
        <Text style={[styles.regularBlackText, styles.mt10]}>
          {restaurantRatingDescription} {rating.toFixed(1)}
        </Text>
        <View style={styles.blueBadgeContainer}>
          <BlueBadge
            mainText={speciality}
            mainTextStyles={styles.blueBadgeMainTextStyles}
            containerStyles={styles.blueBadgeContainerStyles}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default memo(RestaurantDetail);
