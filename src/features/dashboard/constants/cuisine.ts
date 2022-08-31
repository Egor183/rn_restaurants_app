enum CUISINE_NAMES {
  CHINESE = 'chinese',
  INDIAN = 'indian',
  ITALIAN = 'italian',
}

export const CUISINE_IMAGES = {
  [CUISINE_NAMES.CHINESE]:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRuy3n0TF6VhWwmBcbOe4K32ADy5nvwBnqYihRFqBWSFloW7jtzzJPRcTblCh1gKwRdM&usqp=CAU',
  [CUISINE_NAMES.INDIAN]:
    'https://africa-images.com/public/photos/c/a/caqEQwmpNjCQiEfsGcSPVlYMi/caqEQwmpNjCQiEfsGcSPVlYMi_smaller.jpg',
  [CUISINE_NAMES.ITALIAN]:
    'https://i.pinimg.com/736x/ed/d7/36/edd736469bcd7ac619a8cc3540809d40.jpg',
};

export const CUISINE_QUERY_PARAMS = {
  STALE_TIME_NUMBER_OF_SECONDS: 5,
  CACHE_TIME_NUMBER_OF_MINUTES: 5,
  RETRY_ATTEMPTS: 2,
};
