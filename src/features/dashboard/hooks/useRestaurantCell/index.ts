import {useCallback} from 'react';
// import {useNavigation} from '@src/hooks';
import {useRestaurantData} from '../useRestaurantData/index';

export const useRestaurantCell = (id: string) => {
  // const {navigate} = useNavigation();

  const restaurantData = useRestaurantData(id);

  const handlePressCuisineCell = useCallback(() => {
    // navigate(ROUTES.RESTAURANTS, {cuisine: id});
  }, []);

  return {restaurantData, handlePressCuisineCell};
};
