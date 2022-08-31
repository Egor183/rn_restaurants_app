import {ROUTES} from '@src/constants/routes';

export type DashboardStackParamList = {
  [ROUTES.CUISINES]: undefined;
  [ROUTES.RESTAURANTS]: {cuisine: string};
  [ROUTES.RESTAURANT_DETAIL]: {id: string};
};
