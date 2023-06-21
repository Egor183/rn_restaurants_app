import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale, setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: Math.floor(3),
  },

  container: {
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 3,
  },

  imageBackground: {
    aspectRatio: 2 / 1,
    width: '100%',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  fastImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: COLORS.BLACK,
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

  restaurantInfoContainer: {
    justifyContent: 'space-between',
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

  dashContainer: {
    overflow: 'hidden',
  },

  halfOpacity: {
    opacity: 0.5,
  },

  closedText: {
    color: COLORS.WHITE,
    fontSize: setModerateScale(18),
    position: 'absolute',
    zIndex: 2,
  },
});

export default styles;
