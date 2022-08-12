import {useColorScheme} from 'react-native';
import {THEME} from '@src/constants';

export const useBarStyle = () => {
  const isDarkMode = useColorScheme() === THEME.THEMES.DARK;

  return isDarkMode
    ? THEME.STATUS_BAR_THEMES.LIGHT_CONTENT
    : THEME.STATUS_BAR_THEMES.DARK_CONTENT;
};
