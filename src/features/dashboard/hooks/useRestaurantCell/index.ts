import {useCallback, useMemo} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@src/hooks';
import {ROUTES} from '@src/constants/routes';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';
import {useRestaurantData} from '../useRestaurantData/index';
import {getRestaurantRatingIconParams} from '../../helpers';

export const useRestaurantCell = (restaurantId: string) => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<DashboardStackParamList, ROUTES.RESTAURANTS>
    >();

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
