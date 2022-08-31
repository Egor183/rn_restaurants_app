import renderer from 'react-test-renderer';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@src/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import RestaurantList from '@src/features/dashboard/screens/RestaurantList';
import {restaurantActions} from '@src/features/dashboard/models/restaurant';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';
import {ROUTES} from '@src/constants/routes';
import {RESTAURANT_MOCK_DATA} from '../../__mocks__';

describe('Restaurant renders test', () => {
  jest.useFakeTimers();

  test('Should render found restaurant list', () => {
    const queryClient = new QueryClient();

    const Stack = createNativeStackNavigator<DashboardStackParamList>();

    store.dispatch(restaurantActions.setRestaurant(RESTAURANT_MOCK_DATA));

    const tree = renderer
      .create(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name={ROUTES.RESTAURANTS}
                  component={RestaurantList}
                  initialParams={{cuisineId: 'chinese'}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </QueryClientProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
