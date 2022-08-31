import {
  restaurantActions,
  restaurantReducer,
} from '@src/features/dashboard/models/restaurant';
import {RestaurantStateType} from '@src/features/dashboard/models/restaurant/types';
import {RESTAURANT_MOCK_DATA} from '../../__mocks__';

describe('Restaurant reducer tests', () => {
  const initialState: RestaurantStateType = {
    cuisinesRestaurantsIds: {},
    restaurantsData: {},
  };

  test('Should initially set {cuisinesData:{}, cuisineIds:[]}', () => {
    expect(restaurantReducer(undefined, {type: undefined})).toEqual(
      initialState,
    );
  });

  test('Should be able dispatch restaurant data', () => {
    expect(
      restaurantReducer(
        initialState,
        restaurantActions.setRestaurant(RESTAURANT_MOCK_DATA),
      ),
    ).toEqual(RESTAURANT_MOCK_DATA);
  });
});
