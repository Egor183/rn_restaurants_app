import {normalize, schema} from 'normalizr';
import {RESTAURANT_STATUSES} from '../../constants';
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
          isRestaurantClosed: key === RESTAURANT_STATUSES.CLOSE,
        };
      },
    },
  );

  const cuisinesRestaurantsSchema = new schema.Entity(
    'cuisinesRestaurantsIds',
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
    entities: {restaurantsData, cuisinesRestaurantsIds},
  } = normalize(response, [cuisinesRestaurantsSchema]);

  return {restaurantsData, cuisinesRestaurantsIds} as RestaurantStateType;
};
