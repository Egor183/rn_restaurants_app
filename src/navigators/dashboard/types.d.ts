import {ROUTES} from '@src/constants/routes';

export type DashboardStackParamList = {
  [ROUTES.CUISINES]: undefined;
  [ROUTES.RESTAURANTS]: {cuisines: string};
  [ROUTES.RESTAURANT_DETAIL]: undefined;
};
