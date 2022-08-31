enum CUISINE_NAMES {
  CHINESE = 'chinese',
  INDIAN = 'indian',
  ITALIAN = 'italian',
}

export const CUISINE_IMAGES = {
  [CUISINE_NAMES.CHINESE]:
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3194%2Ftrend20210823114529.jpg',
  [CUISINE_NAMES.INDIAN]:
    'https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg',
  [CUISINE_NAMES.ITALIAN]:
    'https://assets.site-static.com/userFiles/1621/image/italian-food-in-durango.jpg',
};

export const CUISINE_QUERY_PARAMS = {
  STALE_TIME_NUMBER_OF_SECONDS: 5,
  CACHE_TIME_NUMBER_OF_MINUTES: 5,
  RETRY_ATTEMPTS: 2,
};
