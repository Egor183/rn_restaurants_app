import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROUTES} from '@src/constants/routes';
import {DashboardStackParamList} from '@src/navigators/dashboard/types';

export type CuisineNativeStackNavigationNavigationType =
  NativeStackNavigationProp<DashboardStackParamList, ROUTES.CUISINES>;
