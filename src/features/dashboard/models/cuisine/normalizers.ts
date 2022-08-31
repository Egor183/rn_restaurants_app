import {normalize, schema} from 'normalizr';
import {CUISINE_IMAGES} from '../../constants';
import {getCuisineName} from '../../helpers';
import {CuisinesFetchDataType} from '../../services/api/fetchCuisines/types';
import {CuisineStateType} from './types';

export const getNormalizedFetchCuisinesData = (
  response: CuisinesFetchDataType,
): CuisineStateType => {
  const cuisinesSchema = new schema.Entity(
    'cuisinesData',
    {},
    {
      idAttribute: (value, parent) => getCuisineName(value, parent),
      processStrategy: (value, parent) => ({
        numberOfPlaces: value.open.length + value.close.length,
        cuisineName: getCuisineName(value, parent),
        cuisineImage:
          CUISINE_IMAGES[
            getCuisineName(value, parent) as keyof typeof CUISINE_IMAGES
          ],
      }),
    },
  );

  const {
    entities: {cuisinesData},
    result: cuisineIds,
  } = normalize(response, [cuisinesSchema]);

  return {cuisinesData, cuisineIds} as CuisineStateType;
};
