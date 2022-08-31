import {useAppSelector} from '@src/hooks';
import {useRoute} from '@react-navigation/native';
import {restaurantSelectors} from '../../models/restaurant';
import {RestaurantsScreenRoutePropType} from './types';

export const useRestaurants = () => {
  const {params} = useRoute<RestaurantsScreenRoutePropType>();

  const restaurantsIds = useAppSelector(state =>
    restaurantSelectors.selectRestaurantsIds(state, params.cuisine),
  );

  return {
    restaurantsIds,
  };
};
