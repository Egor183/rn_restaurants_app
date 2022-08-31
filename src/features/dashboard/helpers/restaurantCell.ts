import {
  MIN_GOOD_RESTAURANT_RATING,
  RESTAURANT_RATING_ICON_PARAMS,
} from '../constants';

export const getRestaurantRatingIconParams = (rating: number) =>
  rating > MIN_GOOD_RESTAURANT_RATING
    ? RESTAURANT_RATING_ICON_PARAMS.GOOD
    : RESTAURANT_RATING_ICON_PARAMS.BAD;
