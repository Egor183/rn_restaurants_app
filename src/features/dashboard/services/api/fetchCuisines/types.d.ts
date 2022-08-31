export type CuisinesType = 'chinese' | 'indian' | 'italian';

type RestaurantStatusesType = 'close' | 'open';

type RestaurantDataType = {
  currency: string;
  deliveryCost: number;
  deliveryTime: string;
  id: string;
  imageUrl: string;
  minOrder: number;
  rating: number;
  restaurantName: string;
  shortDesc: string;
  speciality?: string;
};

type RestaurantsDataWithStatusType = Record<
  RestaurantStatusesType,
  RestaurantDataType[]
>;

export type CuisinesFetchDataType = Record<
  CuisinesType,
  RestaurantsDataWithStatusType
>;
