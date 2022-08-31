import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@src/hooks';
import MainContainer from '@src/components/MainContainer';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import Header from '@src/components/Header';
import {useRestaurants} from '../../hooks';
import RestaurantCell from './components/RestaurantCell';

import styles from './styles';

const RestaurantList = () => {
  const {restaurantsIds, cuisineId} = useRestaurants();
  const {goBack} = useNavigation();

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.restaurantCellContainer}>
      <RestaurantCell key={item} restaurantId={item} />
    </View>
  );

  return (
    <MainContainer>
      <Header
        leftComponent={<ButtonBack onPress={goBack} />}
        title={cuisineId}
      />
      <FlatList
        contentContainerStyle={styles.pb40}
        renderItem={renderItem}
        keyExtractor={item => item}
        data={restaurantsIds}
        initialNumToRender={5}
        maxToRenderPerBatch={8}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default memo(RestaurantList);
