import {useCallback} from 'react';
import {ROUTES} from '@src/constants/routes';
import {useAppSelector, useNavigation} from '@src/hooks';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';
import {cuisineSelectors} from '../../models/cuisine';

export const useCuisineCell = (cuisineId: string) => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<DashboardStackParamList, ROUTES.CUISINES>
    >();

  const cuisineData = useAppSelector(state =>
    cuisineSelectors.selectCuisineData(state, cuisineId),
  );

  const handlePressCuisineCell = useCallback(() => {
    navigate(ROUTES.RESTAURANTS, {cuisineId});
  }, [navigate, cuisineId]);

  return {cuisineData, handlePressCuisineCell};
};
