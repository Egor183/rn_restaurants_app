import {useAppSelector} from '@src/hooks';
import {restaurantSelectors} from '../../models/restaurant';

export const useRestaurantData = (restaurantId: string) => {
  const restaurantData = useAppSelector(state =>
    restaurantSelectors.selectRestaurantData(state, restaurantId),
  );

  return restaurantData;
};
