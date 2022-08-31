import {COLORS} from '@src/constants';
import {ScaledSheet} from 'react-native-size-matters';
import {setModerateScale, setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  mainContainer: {
    aspectRatio: 2 / 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },

  contentContainer: {
    paddingTop: setModerateScale(20),
    paddingHorizontal: setModerateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mediumBlackText: {
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(16),
    color: COLORS.LIGHT_BLACK,
    textTransform: 'capitalize',
  },

  regularGrayText: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.DARK_GRAY,
  },
});

export default styles;
