import {useRoute} from '@react-navigation/native';
import {useMemo} from 'react';
import {getRestaurantRatingDescription} from '../../helpers/restaurantCell';
import {useRestaurantData} from '../useRestaurantData';
import {RestaurantsDetailScreenRoutePropType} from './types';

export const useRestaurantDetail = () => {
  const {
    params: {restaurantId},
  } = useRoute<RestaurantsDetailScreenRoutePropType>();

  const restaurantData = useRestaurantData(restaurantId);

  const currentRestaurantData = useMemo(
    () => ({
      ...restaurantData,
      restaurantRatingDescription: getRestaurantRatingDescription(
        restaurantData.rating,
      ),
    }),
    [restaurantData],
  );

  return {
    restaurantData: currentRestaurantData,
  };
};
