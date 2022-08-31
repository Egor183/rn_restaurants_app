import {moderateVerticalScale} from 'react-native-size-matters';
import {COLORS} from '@src/constants';

export const RESTAURANT_RATING_ICON_PARAMS = {
  GOOD: {
    size: moderateVerticalScale(14),
    type: 'entypo',
    name: 'emoji-happy',
    color: COLORS.DARK_GRAY,
  },
  BAD: {
    size: moderateVerticalScale(14),
    type: 'entypo',
    name: 'emoji-sad',
    color: COLORS.DARK_GRAY,
  },
};

export const DELIVERY_ICON_PARAMS = {
  type: 'material-community',
  name: 'bike',
  color: COLORS.DARK_GRAY,
  size: moderateVerticalScale(14),
};
