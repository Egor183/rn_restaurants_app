import axios from 'axios';
import Config from 'react-native-config';
import {LoginParametersType, LoginResponseType} from './types';

const {BASE_URL} = Config;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const login = async (
  parameters: LoginParametersType,
): Promise<LoginResponseType> => {
  const {data} = await axiosClient.post('/login', parameters);

  return data;
};
