import {
  CuisinesType,
  RestaurantDataType,
  RestaurantStatusesType,
} from '../../services/api/fetchCuisines/types';

type CuisinesRestaurantsIdsType = Record<
  CuisinesType,
  Record<RestaurantStatusesType, string[]>
>;

interface RestaurantDataWithStatusType extends RestaurantDataType {
  status: RestaurantStatusesType;
}

type RestaurantsDataType = Record<string, RestaurantDataWithStatusType>;

export type RestaurantStateType = {
  cuisinesRestaurantsIds: CuisinesRestaurantsIdsType;
  restaurantsData: RestaurantsDataType;
};
