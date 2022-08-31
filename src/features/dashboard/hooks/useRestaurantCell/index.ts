import {useCallback} from 'react';
import {useNavigation} from '@src/hooks';
import {useRestaurantData} from '../useRestaurantData/index';
import {ROUTES} from '@src/constants/routes';
import {getRestaurantRatingIconParams} from '../../helpers';

export const useRestaurantCell = (id: string) => {
  const {navigate} = useNavigation();

  const restaurantData = useRestaurantData(id);

  const restaurantRatingIconParams = getRestaurantRatingIconParams(
    restaurantData.rating,
  );

  const handlePressCuisineCell = useCallback(() => {
    navigate(ROUTES.RESTAURANT_DETAIL, {id});
  }, [navigate, id]);

  return {
    restaurantData,
    restaurantRatingIconParams,
    handlePressCuisineCell,
  };
};
