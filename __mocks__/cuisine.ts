import {CuisineIdsType} from '@src/features/dashboard/models/cuisine/types';

export const CUISINE_MOCK_DATA = {
  cuisineIds: ['chinese'] as CuisineIdsType,
  cuisinesData: {
    chinese: {
      cuisineImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRuy3n0TF6VhWwmBcbOe4K32ADy5nvwBnqYihRFqBWSFloW7jtzzJPRcTblCh1gKwRdM&usqp=CAU',
      cuisineName: 'chinese',
      numberOfPlaces: 19,
    },
  },
};
