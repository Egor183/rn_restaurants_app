import {normalize, schema} from 'normalizr';
import {getCuisineName} from '../../helpers';
import {CuisinesFetchDataType} from '../../services/api/fetchCuisines/types';
import {RestaurantStateType} from './types';

export const getNormalizedRestaurantsData = (
  response: CuisinesFetchDataType,
): RestaurantStateType => {
  const restaurantsDataSchema = new schema.Entity(
    'restaurantsData',
    {},
    {
      processStrategy: (value, _, key) => {
        return {
          ...value,
          status: key,
        };
      },
    },
  );

  const cuisinesRestaurantsSchema = new schema.Entity(
    'cuisineRestaurants',
    {open: [restaurantsDataSchema], close: [restaurantsDataSchema]},
    {
      idAttribute: (value, parent) => getCuisineName(value, parent),
      mergeStrategy: (entityA, entityB) => ({
        ...entityA,
        ...entityB,
      }),
    },
  );

  const {
    entities: {restaurantsData, cuisineRestaurants},
  } = normalize(response, [cuisinesRestaurantsSchema]);

  return {restaurantsData, cuisineRestaurants} as RestaurantStateType;
};
