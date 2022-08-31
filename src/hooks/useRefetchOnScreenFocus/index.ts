import {useCallback, useRef} from 'react';
import {AxiosError} from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {QueryObserverResult} from '@tanstack/react-query';

export function useRefreshOnFocus<T>(
  refetch: () => Promise<QueryObserverResult<T, AxiosError<string, number>>>,
  isStale: boolean,
) {
  const firstTimeRef = useRef(true);

  useFocusEffect(
    useCallback(() => {
      if (firstTimeRef.current || !isStale) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch, isStale]),
  );
}
