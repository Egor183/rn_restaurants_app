import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale, setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },

  mainContainer: {
    aspectRatio: 2 / 1,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  contentContainer: {
    padding: setModerateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mediumBlackText: {
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(16),
    color: COLORS.LIGHT_BLACK,
  },

  regularGrayText: {
    fontFamily: 'Roboto-Regular',
    fontSize: setModerateVerticalScale(14),
    color: COLORS.DARK_GRAY,
  },

  mediumBlueText: {
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(16),
    color: COLORS.DARK_BLUE,
  },

  regularBlueText: {
    fontFamily: 'Roboto-Regular',
    fontSize: setModerateVerticalScale(14),
    color: COLORS.DARK_BLUE,
    textAlign: 'center',
  },

  restaurantInfoContainer: {
    justifyContent: 'space-between',
  },

  deliveryTimeContainer: {
    backgroundColor: COLORS.LIGHT_BLUE,
    padding: setModerateScale(7),
    borderRadius: 10,
  },

  divider: {
    borderWidth: 0.5,
    borderStyle: 'dashed',
  },

  deliveryInformationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: setModerateScale(15),
    paddingVertical: setModerateScale(10),
  },
});

export default styles;
