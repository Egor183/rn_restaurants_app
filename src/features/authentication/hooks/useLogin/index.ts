import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {useCallback, useState, useEffect} from 'react';
import {ERRORS} from '@src/constants';
import {showError} from '@src/helpers';
import {useAppDispatch} from '@src/hooks/useAppDispatch';
import {login} from '../../services/api';
import {validateAuth} from '../../utils/validations';
import {
  LoginParametersType,
  LoginResponseType,
} from '../../services/api/login/types.d';
import {loginActions} from '../../models/login';
import {ValidationErrorType} from './types';

export const useLogin = () => {
  const [validationError, setValidationError] =
    useState<ValidationErrorType>(undefined);

  const dispatch = useAppDispatch();

  const {mutate, isLoading, isSuccess} = useMutation<
    LoginResponseType,
    AxiosError<string, number>,
    LoginParametersType
  >(({email, password}) => login({email, password}), {
    onError: error => {
      showError(
        ERRORS.AUTHENTICATION[
          error?.request.status as keyof typeof ERRORS.AUTHENTICATION
        ],
      );
    },
  });

  const handlePressSignIn = useCallback(
    ({email, password}: LoginParametersType) => {
      const currentValidationError = validateAuth({email, password});

      setValidationError({
        email: !currentValidationError?.email,
        password: !currentValidationError?.password,
      });

      if (currentValidationError) {
        showError(Object.values(currentValidationError));

        return;
      }

      mutate({email, password});
    },
    [mutate],
  );

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    dispatch(loginActions.setIsLoggedIn(true));
  }, [isSuccess, dispatch]);

  return {
    validationError,
    isLoading,
    handlePressSignIn,
  };
};
