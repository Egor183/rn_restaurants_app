import {useCallback} from 'react';
import {ROUTES} from '@src/constants/routes';
import {useAppSelector, useNavigation} from '@src/hooks';
import {cuisineSelectors} from '../../models/cuisine';

export const useCuisineCell = (cuisineId: string) => {
  const {navigate} = useNavigation();

  const cuisineData = useAppSelector(state =>
    cuisineSelectors.selectCuisineData(state, cuisineId),
  );

  const handlePressCuisineCell = useCallback(() => {
    navigate(ROUTES.RESTAURANTS, {cuisineId: cuisineId});
  }, [navigate, cuisineId]);

  return {cuisineData, handlePressCuisineCell};
};
