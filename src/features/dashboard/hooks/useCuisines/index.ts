import {AxiosError} from 'axios';
import {useQuery} from '@tanstack/react-query';
import {ERRORS} from '@src/constants';
import {getTimeInMinutes, getTimeInSeconds, showError} from '@src/helpers';
import {useAppSelector} from '@src/hooks/useAppSelector';
import {useAppDispatch} from '@src/hooks/useAppDispatch';
import {
  cuisineActions,
  cuisineSelectors,
  getNormalizedFetchCuisinesData,
} from '../../models/cuisine';
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
        const {cuisinesData, cuisineIds} = getNormalizedFetchCuisinesData(data);

        dispatch(cuisineActions.setCuisine({cuisineIds, cuisinesData}));
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
