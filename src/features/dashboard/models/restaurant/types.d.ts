import {
  CuisinesType,
  RestaurantDataType,
  RestaurantStatusesType,
} from '../../services/api/fetchCuisines/types';

type CuisineRestaurantsType = Record<
  CuisinesType,
  Record<RestaurantStatusesType, string[]>
>;

interface RestaurantDataWithStatusType extends RestaurantDataType {
  status: RestaurantStatusesType;
}

type RestaurantsDataType = Record<string, RestaurantDataWithStatusType>;

export type RestaurantStateType = {
  cuisineRestaurants: CuisineRestaurantsType;
  restaurantsData: RestaurantsDataType;
};
