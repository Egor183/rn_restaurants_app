import {useColorScheme} from 'react-native';
import {STATUS_BAR_THEMES, THEMES} from '@src/constants';

export const useBarStyle = () => {
  const isDarkMode = useColorScheme() === THEMES.DARK;

  return isDarkMode
    ? STATUS_BAR_THEMES.LIGHT_CONTENT
    : STATUS_BAR_THEMES.DARK_CONTENT;
};
