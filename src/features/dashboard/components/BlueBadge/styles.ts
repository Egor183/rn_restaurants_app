import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale, setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  mainTextStyles: {
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(16),
    color: COLORS.DARK_BLUE,
    textAlign: 'center',
    alignItems: 'flex-start',
    textTransform: 'uppercase',
  },

  additionalTextStyles: {
    fontFamily: 'Roboto-Regular',
    fontSize: setModerateVerticalScale(14),
    color: COLORS.DARK_BLUE,
    textAlign: 'center',
    alignItems: 'flex-start',
  },

  containerStyles: {
    backgroundColor: COLORS.LIGHT_BLUE,
    padding: setModerateScale(7),
    borderRadius: 5,
  },
});

export default styles;
