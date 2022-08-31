import ButtonBack from '@src/components/Buttons/ButtonBack';
import MainContainer from '@src/components/MainContainer';
import React, {memo} from 'react';
import {useRestaurants} from '../../hooks';
import RestaurantCell from './components/RestaurantCell';

const RestaurantList = () => {
  const cuisine = '';
  const {restaurants} = useRestaurants({cuisine});

  return (
    <MainContainer leftComponent={<ButtonBack />} title="Italian">
      <RestaurantCell />
    </MainContainer>
  );
};

export default memo(RestaurantList);
