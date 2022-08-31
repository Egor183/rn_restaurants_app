import {useCallback} from 'react';
import {AxiosError} from 'axios';
import {useQuery} from '@tanstack/react-query';
import {ERRORS} from '@src/constants';
import {getTimeInMinutes, showError} from '@src/helpers';
import {useAppDispatch, useAppSelector, useRefreshOnFocus} from '@src/hooks';
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
  const cuisinesIds = useAppSelector(cuisineSelectors.selectCuisineIds);

  const dispatch = useAppDispatch();

  const {isLoading, refetch, isStale} = useQuery<
    CuisinesFetchDataType,
    AxiosError<string, number>
  >(['cuisines'], fetchCuisines, {
    staleTime: getTimeInMinutes(
      CUISINE_QUERY_PARAMS.STALE_TIME_NUMBER_OF_MINUTES,
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
        ERRORS.CUISINES[error?.request.status as keyof typeof ERRORS.CUISINES],
      );
    },
  });

  const handleRefresh = useCallback(() => {
    if (!isStale) {
      return;
    }

    refetch();
  }, [isStale, refetch]);

  useRefreshOnFocus<CuisinesFetchDataType>(refetch, isStale);

  return {
    cuisinesIds,
    isLoading,
    handleRefresh,
    isStale,
  };
};
