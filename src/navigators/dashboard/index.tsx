import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@src/constants/routes';
import RestaurantList from '../../features/dashboard/screens/RestaurantList';
import RestaurantDetail from '../../features/dashboard/screens/RestaurantDetail';
import CuisineList from '../../features/dashboard/screens/CuisineList';

const Stack = createNativeStackNavigator();

const DashboardNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.RESTAURANTS}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.CUISINES} component={CuisineList} />
      <Stack.Screen name={ROUTES.RESTAURANTS} component={RestaurantList} />
      <Stack.Screen name={ROUTES.DETAIL} component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
