import {TIME_AMOUNT} from '@src/constants';

export const getTimeInSeconds = (numberOfSeconds: number) =>
  TIME_AMOUNT.SECOND * numberOfSeconds;

export const getTimeInMinutes = (numberOfMinutes: number) =>
  TIME_AMOUNT.MINUTE * numberOfMinutes;
