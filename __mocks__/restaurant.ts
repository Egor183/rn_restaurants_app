import {RestaurantStatusesType} from './../src/features/dashboard/services/api/fetchCuisines/types.d';

export const RESTAURANT_MOCK_DATA = {
  restaurantsData: {
    h6109200e07f1557c9dae06ff: {
      currency: 'USD',
      deliveryCost: 2.33,
      deliveryTime: '30-40 min',
      id: 'h6109200e07f1557c9dae06ff',
      imageUrl:
        'https://www.top10berlin.de/sites/top10berlin.de/files/styles/list_image/public/location/mainimages/2014/11/10/long_march_canteen_betreiber_03.jpg?itok=WDAaoFdM',
      isRestaurantClosed: true,
      minOrder: 12,
      rating: 10,
      restaurantName: 'Vicon',
      shortDesc: 'Paradise',
      status: 'close' as RestaurantStatusesType,
    },
  },
  cuisinesRestaurantsIds: {
    chinese: {
      close: ['h6109200e07f1557c9dae06ff'],
      open: ['h6109200e07f1557c9dae06ff'],
    },
  },
};
