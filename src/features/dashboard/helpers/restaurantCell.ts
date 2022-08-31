import {SMILES_SYMBOLS} from '@src/constants';
import {
  MIN_GOOD_RESTAURANT_RATING,
  RESTAURANT_RATING_ICON_PARAMS,
} from '../constants';

export const getRestaurantRatingIconParams = (rating: number) =>
  rating > MIN_GOOD_RESTAURANT_RATING
    ? RESTAURANT_RATING_ICON_PARAMS.GOOD
    : RESTAURANT_RATING_ICON_PARAMS.BAD;

export const getRestaurantRatingDescription = (rating: number) =>
  rating > MIN_GOOD_RESTAURANT_RATING
    ? `${SMILES_SYMBOLS.SMILE}   Very good,`
    : `${SMILES_SYMBOLS.SAD}   Poorly,`;
