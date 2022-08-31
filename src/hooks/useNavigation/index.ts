import {
  NavigationProp,
  ParamListBase,
  useNavigation as useReactNavigation,
} from '@react-navigation/native';

export const useNavigation = <
  T extends NavigationProp<ParamListBase, string>,
>() => {
  const {
    canGoBack,
    goBack: goBackReactNavigation,
    navigate: navigateReactNavigation,
  } = useReactNavigation<T>();

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
