import React from 'react';
import renderer from 'react-test-renderer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import CuisineList from '@src/features/dashboard/screens/CuisineList';
import {store} from '@src/store';
import {cuisineActions} from '@src/features/dashboard/models/cuisine';
import {CUISINE_MOCK_DATA} from '../../__mocks__';

describe('CuisineList renders test', () => {
  jest.useFakeTimers();

  test('Should render found cuisines list', () => {
    const queryClient = new QueryClient();

    store.dispatch(cuisineActions.setCuisine(CUISINE_MOCK_DATA));

    const tree = renderer
      .create(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <CuisineList />
            </NavigationContainer>
          </QueryClientProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
