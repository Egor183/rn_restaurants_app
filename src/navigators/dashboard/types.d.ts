import {ROUTES} from '@src/constants/routes';

export type DashboardStackParamList = {
  [ROUTES.CUISINES]: undefined;
  [ROUTES.RESTAURANTS]: {cuisineId: string};
  [ROUTES.RESTAURANT_DETAIL]: {restaurantId: string};
};
