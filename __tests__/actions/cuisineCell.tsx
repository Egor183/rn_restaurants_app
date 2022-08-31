import React from 'react';
import {create} from 'react-test-renderer';
import CuisineCell from '@src/features/dashboard/screens/CuisineList/components/CuisineCell';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '@src/store';
import {cuisineActions} from '@src/features/dashboard/models/cuisine';
import {CUISINE_MOCK_DATA} from '../../__mocks__';
import {ROUTES} from '@src/constants/routes';

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

store.dispatch(cuisineActions.setCuisine(CUISINE_MOCK_DATA));
jest.useFakeTimers();

describe('CuisineCell press action test', () => {
  test('Should navigate to RESTAURANTS with {cuisineId : "chinese"} params', () => {
    const tree = create(
      <Provider store={store}>
        <NavigationContainer>
          <CuisineCell id="chinese" />
        </NavigationContainer>
      </Provider>,
    );

    const pressable = tree.root.findByProps({testID: 'cuisineCell'}).props;

    pressable.onPress();

    expect(mockedNavigation).toBeCalledWith(ROUTES.RESTAURANTS, {
      cuisineId: 'chinese',
    });
  });
});
