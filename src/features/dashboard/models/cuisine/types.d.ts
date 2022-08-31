import {CuisinesType} from '../../services/api/fetchCuisines/types';

export type CuisineDataType = {
  [key: CuisinesType]: {
    cuisineImage: string;
    cuisineName: string;
    numberOfPlaces: number;
  };
};

export type CuisineIdsType = CuisinesType[];

export type CuisineStateType = {
  cuisinesData: CuisineDataType;
  cuisineIds: CuisineIdsType;
};
