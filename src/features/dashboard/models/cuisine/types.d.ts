import {CuisinesType} from '../../services/api/fetchCuisines/types';

export type CuisineDataType = Record<
  CuisinesType,
  {
    cuisineImage: string;
    cuisineName: string;
    numberOfPlaces: number;
  }
>;

type CuisineIdsType = string[];

export type CuisineStateType = {
  cuisinesData: CuisineDataType;
  cuisineIds: CuisineIdsType;
};
