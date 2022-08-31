import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@src/hooks/useAppSelector';
import {loginSelectors} from '@src/features/authentication/models/login';
import AuthenticationNavigation from './authentication';
import DashboardNavigation from './dashboard';

const RootNavigation: FC = () => {
  const isLoggedIn = useAppSelector(loginSelectors.selectIsLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <DashboardNavigation /> : <AuthenticationNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
