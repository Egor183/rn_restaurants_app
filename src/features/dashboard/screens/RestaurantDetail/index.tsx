import React, {memo} from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import {
  COLORS,
  SMILES_SYMBOLS,
  STATUS_BAR_THEMES,
  TEXT_SYMBOLS,
} from '@src/constants';
import {useNavigation} from '@src/hooks';
import MainContainer from '@src/components/MainContainer';
import Header from '@src/components/Header';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import BlueBadge from '../../components/BlueBadge';
import WhiteBadge from './components/WhiteBadge';

import styles from './styles';

const RestaurantDetail = () => {
  const {goBack} = useNavigation();

  return (
    <MainContainer withPaddingHorizontal={false}>
      <View style={[styles.headerContainer, styles.ph24]}>
        <Header
          leftComponent={
            <ButtonBack iconColor={COLORS.WHITE} onPress={goBack} />
          }
          containerStyle={styles.containerStyle}
        />
        <StatusBar barStyle={STATUS_BAR_THEMES.LIGHT_CONTENT} />
      </View>
      <ImageBackground
        source={{
          uri: 'https://media.istockphoto.com/photos/beautiful-panoramic-view-of-tbilisi-at-sunset-picture-id476813550?k=20&m=476813550&s=612x612&w=0&h=nkgs_znOulcr77969-rB-mQ4Tyr8qN53crzMASFZlDU=',
        }}
        style={styles.imageBackground}>
        <View style={[styles.whiteBadgeContainer, styles.ph24]}>
          <View style={styles.mr15}>
            <WhiteBadge text="Hihoijpo" />
          </View>
          <WhiteBadge text="Hihoijpo" />
        </View>
      </ImageBackground>
      <View style={styles.ph24}>
        <Text style={styles.mediumBlackText}>
          Risto{TEXT_SYMBOLS.DOUBLE_SPACE}ran te
        </Text>
        <Text style={[styles.regularGrayText, styles.mt10]}>
          Ristorante;{TEXT_SYMBOLS.TRIPLE_SPACE}
        </Text>
        <Text style={[styles.regularBlackText, styles.mt10]}>
          {SMILES_SYMBOLS.SAD}
          {TEXT_SYMBOLS.TRIPLE_SPACE}Ristorante
        </Text>
        <View style={styles.blueBadgeContainer}>
          <BlueBadge
            mainText="okpokopk"
            mainTextStyles={styles.blueBadgeMainTextStyles}
            containerStyles={styles.blueBadgeContainerStyles}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default memo(RestaurantDetail);
