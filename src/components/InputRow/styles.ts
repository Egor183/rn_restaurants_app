import {ScaledSheet} from 'react-native-size-matters';
import {setModerateVerticalScale, setModerateScale} from '@src/services/scale';
import {COLORS} from '@src/constants';

const styles = ScaledSheet.create({
  containerStyle: {
    paddingHorizontal: 0,
    marginBottom: setModerateVerticalScale(20),
  },

  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.COLORS.LIGHT_GRAY,
    borderRadius: 10,
    paddingHorizontal: setModerateScale(20),
    height: setModerateVerticalScale(40),
  },

  labelStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    marginBottom: setModerateVerticalScale(10),
    fontSize: setModerateScale(14),
  },

  inputStyle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
});

export default styles;
