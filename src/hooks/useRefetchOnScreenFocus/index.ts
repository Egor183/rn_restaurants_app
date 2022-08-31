import {AxiosError} from 'axios';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {QueryObserverResult} from '@tanstack/react-query';

export function useRefreshOnFocus<T>(
  refetch: () => Promise<QueryObserverResult<T, AxiosError<string, number>>>,
  isStale: boolean,
) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current || !isStale) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch, isStale]),
  );
}
