import {useMemo} from 'react';
import {useAppSelector} from '@src/hooks';
import {restaurantSelectors} from '../../models/restaurant';

export const useRestaurantData = (id: string) => {
  const restaurantData = useAppSelector(state =>
    restaurantSelectors.selectRestaurantData(state, id),
  );

  const currentRestaurantData = useMemo(() => {
    const [deliveryTimeRange, deliveryTimeCurrency] =
      restaurantData.deliveryTime.split(' ');

    return {...restaurantData, deliveryTimeRange, deliveryTimeCurrency};
  }, [restaurantData]);

  return currentRestaurantData;
};
