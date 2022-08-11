import {ScaledSheet} from 'react-native-size-matters';
import {setModerateVerticalScale, setModerateScale} from '@src/services/scale';
import {COLORS} from '@src/constants';

const styles = ScaledSheet.create({
  linearGradient: {
    flex: 1,
  },

  loginFormContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1.2,
    paddingTop: setModerateVerticalScale(50),
    paddingHorizontal: setModerateScale(32),
    marginTop: -20,
    backgroundColor: 'white',
  },

  mainText: {
    fontSize: setModerateScale(24),
  },

  additionalText: {
    fontSize: setModerateScale(14),
    marginTop: setModerateVerticalScale(5),
    color: COLORS.COLORS.DARK_GRAY,
  },

  formContainer: {
    marginTop: setModerateVerticalScale(30),
  },

  button: {
    backgroundColor: COLORS.COLORS.MEDIUM_GRAY,
    height: setModerateVerticalScale(40),
    borderRadius: 15,
    marginTop: setModerateVerticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: COLORS.COLORS.WHITE,
  },
});
export default styles;
