import {
  cuisineActions,
  cuisineReducer,
} from '@src/features/dashboard/models/cuisine';
import {CuisineStateType} from '@src/features/dashboard/models/cuisine/types';
import {CUISINE_MOCK_DATA} from '../../__mocks__';

describe('Cuisine reducer tests', () => {
  const initialState: CuisineStateType = {
    cuisinesData: {},
    cuisineIds: [],
  };

  test('Should initially set {cuisinesData:{}, cuisineIds:[]}', () => {
    expect(cuisineReducer(undefined, {type: undefined})).toEqual(initialState);
  });

  test('Should be able dispatch cuisine data', () => {
    expect(
      cuisineReducer(
        initialState,
        cuisineActions.setCuisine(CUISINE_MOCK_DATA),
      ),
    ).toEqual(CUISINE_MOCK_DATA);
  });
});
