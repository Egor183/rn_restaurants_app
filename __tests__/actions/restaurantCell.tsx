import React from 'react';
import {create} from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '@src/store';
import {RESTAURANT_MOCK_DATA} from '../../__mocks__';
import {ROUTES} from '@src/constants/routes';
import {restaurantActions} from '@src/features/dashboard/models/restaurant';
import RestaurantCell from '@src/features/dashboard/screens/RestaurantList/components/RestaurantCell';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

store.dispatch(restaurantActions.setRestaurant(RESTAURANT_MOCK_DATA));
jest.useFakeTimers();

describe('RestaurantCell press action test', () => {
  test('Should navigate to RESTAURANT_DETAIL with {restaurantId : "h6109200e07f1557c9dae06ff"} params ', () => {
    const tree = create(
      <Provider store={store}>
        <NavigationContainer>
          <RestaurantCell restaurantId="h6109200e07f1557c9dae06ff" />
        </NavigationContainer>
      </Provider>,
    );

    const pressable = tree.root.findByProps({testID: 'restaurantCell'}).props;

    pressable.onPress();

    expect(mockedNavigation).toBeCalledWith(ROUTES.RESTAURANT_DETAIL, {
      restaurantId: 'h6109200e07f1557c9dae06ff',
    });
  });
});
