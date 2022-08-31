import {useAppSelector} from '@src/hooks';
import {useRoute} from '@react-navigation/native';
import {restaurantSelectors} from '../../models/restaurant';
import {RestaurantsScreenRoutePropType} from './types';

export const useRestaurants = () => {
  const {
    params: {cuisineId},
  } = useRoute<RestaurantsScreenRoutePropType>();

  const restaurantsIds = useAppSelector(state =>
    restaurantSelectors.selectRestaurantsIds(state, cuisineId),
  );

  return {
    restaurantsIds,
    cuisineId,
  };
};
