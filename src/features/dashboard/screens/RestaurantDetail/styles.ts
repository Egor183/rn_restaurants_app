import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale, setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  ph24: {
    paddingHorizontal: setModerateScale(24),
  },

  imageBackground: {
    width: '100%',
    aspectRatio: 3 / 2,
    justifyContent: 'flex-end',
  },

  headerContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    backgroundColor: COLORS.TRANSPARENT,
    alignSelf: 'center',
  },

  containerStyle: {
    backgroundColor: COLORS.TRANSPARENT,
    width: '100%',
    padding: 0,
  },

  whiteBadgeContainer: {
    paddingBottom: setModerateScale(24),
    flexDirection: 'row',
  },

  mr10: {
    marginRight: setModerateScale(10),
  },

  mediumBlackText: {
    fontFamily: 'Roboto-Medium',
    fontSize: setModerateVerticalScale(20),
    letterSpacing: setModerateVerticalScale(0.5),
    marginTop: setModerateVerticalScale(15),
    color: COLORS.LIGHT_BLACK,
  },

  regularGrayText: {
    fontFamily: 'Roboto-Regular',
    fontSize: setModerateVerticalScale(16),
    letterSpacing: setModerateVerticalScale(0.5),
    color: COLORS.DARK_GRAY,
  },

  mt10: {
    marginTop: 10,
  },

  regularBlackText: {
    fontFamily: 'Roboto-Regular',
    fontSize: setModerateVerticalScale(16),
    letterSpacing: setModerateVerticalScale(0.5),
    color: COLORS.LIGHT_BLACK,
    width: setModerateScale(200),
  },

  blueBadgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: setModerateScale(24),
  },

  blueBadgeMainTextStyles: {
    fontFamily: 'Roboto-Bold',
  },

  blueBadgeContainerStyles: {
    padding: setModerateScale(10),
  },
});

export default styles;
