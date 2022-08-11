import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../features/authentication/screens/Login';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthenticationNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigation;
