import {useCallback, useMemo} from 'react';
import {useNavigation} from '@src/hooks';
import {useRestaurantData} from '../useRestaurantData/index';
import {ROUTES} from '@src/constants/routes';
import {getRestaurantRatingIconParams} from '../../helpers';

export const useRestaurantCell = (restaurantId: string) => {
  const {navigate} = useNavigation();

  const restaurantData = useRestaurantData(restaurantId);

  const restaurantRatingIconParams = getRestaurantRatingIconParams(
    restaurantData.rating,
  );

  const handlePressRestaurantCell = useCallback(() => {
    navigate(ROUTES.RESTAURANT_DETAIL, {restaurantId});
  }, [navigate, restaurantId]);

  const currentRestaurantData = useMemo(() => {
    const [deliveryTimeRange, deliveryTimeCurrency] =
      restaurantData.deliveryTime.split(' ');

    return {
      ...restaurantData,
      deliveryTimeRange,
      deliveryTimeCurrency,
    };
  }, [restaurantData]);

  return {
    restaurantData: currentRestaurantData,
    restaurantRatingIconParams,
    handlePressRestaurantCell,
  };
};
