import {useCallback} from 'react';
import {ROUTES} from '@src/constants/routes';
import {useAppSelector, useNavigation} from '@src/hooks';
import {cuisineSelectors} from '../../models/cuisine';

export const useCuisineCell = (id: string) => {
  const {navigate} = useNavigation();

  const cuisineData = useAppSelector(state =>
    cuisineSelectors.selectCuisineData(state, id),
  );

  const handlePressCuisineCell = useCallback(() => {
    navigate(ROUTES.RESTAURANTS);
  }, [navigate]);

  return {cuisineData, handlePressCuisineCell};
};
