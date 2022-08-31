import {useAppSelector} from '@src/hooks';
import {cuisineSelectors} from '../../models/cuisine';

export const useCuisineCell = (id: string) =>
  useAppSelector(state => cuisineSelectors.selectCuisineData(state, id));
