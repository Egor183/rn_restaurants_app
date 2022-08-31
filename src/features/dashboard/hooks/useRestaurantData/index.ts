import {useAppSelector} from '@src/hooks';
import {restaurantSelectors} from '../../models/restaurant';

export const useRestaurantData = (id: string) => {
  const restaurantData = useAppSelector(state =>
    restaurantSelectors.selectRestaurantData(state, id),
  );

  return restaurantData;
};
