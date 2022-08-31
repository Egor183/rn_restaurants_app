import {
  CuisinesType,
  RestaurantDataType,
  RestaurantStatusesType,
} from '../../services/api/fetchCuisines/types';

type CuisinesRestaurantsIdsType = Partial<
  Record<CuisinesType, Record<RestaurantStatusesType, string[]>>
>;

interface RestaurantAllDataType extends RestaurantDataType {
  status: RestaurantStatusesType;
  isRestaurantClosed: boolean;
}

type RestaurantsDataType = Record<string, RestaurantAllDataType>;

export type RestaurantStateType = {
  cuisinesRestaurantsIds: CuisinesRestaurantsIdsType;
  restaurantsData: RestaurantsDataType;
};
