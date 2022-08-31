import {COLORS} from '@src/constants';
import {ScaledSheet} from 'react-native-size-matters';
import {setModerateVerticalScale} from '@src/services/scale';

export default ScaledSheet.create({
  title: {
    color: COLORS.LIGHT_BLACK,
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(18),
  },

  containerStyle: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  centerContainerStyle: {
    justifyContent: 'center',
  },
});
