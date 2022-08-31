import {
  CuisinesFetchDataType,
  RestaurantsDataWithStatusType,
} from '../services/api/fetchCuisines/types';

export const getCuisineName = (
  value: RestaurantsDataWithStatusType,
  parent: CuisinesFetchDataType,
): string =>
  Object.keys(parent).find(
    key =>
      JSON.stringify(parent[key as keyof CuisinesFetchDataType]) ===
      JSON.stringify(value),
  ) as string;
