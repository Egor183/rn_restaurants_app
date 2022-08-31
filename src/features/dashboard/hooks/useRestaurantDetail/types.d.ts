import {ROUTES} from '@src/constants/routes';
import {RouteProp} from '@react-navigation/native';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';

export type RestaurantsDetailScreenRoutePropType = RouteProp<
  DashboardStackParamList,
  ROUTES.RESTAURANT_DETAIL
>;
