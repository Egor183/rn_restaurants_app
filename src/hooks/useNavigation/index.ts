import {useNavigation as useReactNavigation} from '@react-navigation/native';

export const useNavigation = () => {
  const {
    canGoBack,
    goBack: goBackReactNavigation,
    navigate: navigateReactNavigation,
  } = useReactNavigation();

  const goBack = (): void => {
    if (!canGoBack()) {
      return;
    }

    goBackReactNavigation();
  };

  const navigate = (name: string, params?: Record<string, any>): void => {
    navigateReactNavigation(name as never, params as never);
  };

  return {goBack, navigate};
};
