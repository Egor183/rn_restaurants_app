import axios from 'axios';
import Config from 'react-native-config';
import {CuisinesFetchDataType} from './types';

const {BASE_URL} = Config;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const fetchCuisines = async (): Promise<CuisinesFetchDataType> => {
  const {data} = await axiosClient.get('/cuisines');

  return data;
};
