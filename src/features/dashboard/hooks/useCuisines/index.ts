import {AxiosError} from 'axios';
import {useQuery} from '@tanstack/react-query';
import {ERRORS} from '@src/constants';
import {getTimeInMinutes, getTimeInSeconds, showError} from '@src/helpers';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {
  cuisineActions,
  cuisineSelectors,
  getNormalizedFetchCuisinesData,
} from '../../models/cuisine';
import {
  getNormalizedRestaurantsData,
  restaurantActions,
} from '../../models/restaurant';
import {fetchCuisines} from '../../services/api';
import {CuisinesFetchDataType} from '../../services/api/fetchCuisines/types';
import {CUISINE_QUERY_PARAMS} from '../../constants';

export const useCuisines = () => {
  const cuisines = useAppSelector(cuisineSelectors.selectCuisineIds);

  const dispatch = useAppDispatch();

  const {isLoading} = useQuery<CuisinesFetchDataType, AxiosError>(
    ['cuisines'],
    fetchCuisines,
    {
      staleTime: getTimeInSeconds(
        CUISINE_QUERY_PARAMS.STALE_TIME_NUMBER_OF_SECONDS,
      ),
      cacheTime: getTimeInMinutes(
        CUISINE_QUERY_PARAMS.CACHE_TIME_NUMBER_OF_MINUTES,
      ),
      retry: CUISINE_QUERY_PARAMS.RETRY_ATTEMPTS,
      onSuccess: data => {
        const cuisine = getNormalizedFetchCuisinesData(data);
        const restaurant = getNormalizedRestaurantsData(data);

        dispatch(cuisineActions.setCuisine(cuisine));
        dispatch(restaurantActions.setRestaurant(restaurant));
      },
      onError: error => {
        showError(
          ERRORS.CUISINES[
            error?.request.status as keyof typeof ERRORS.CUISINES
          ],
        );
      },
    },
  );

  return {
    cuisines,
    isLoading,
  };
};
