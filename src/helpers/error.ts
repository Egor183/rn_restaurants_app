import {Alert} from 'react-native';
import {ERRORS} from '@src/constants';

export const getError = (error: string | string[]) => {
  if (Array.isArray(error)) {
    return error.join('\n');
  }

  return error;
};

export const showError = (error?: string | string[]) => {
  Alert.alert(getError(error || ERRORS.DEFAULT.DEFAULT_ERROR));
};
