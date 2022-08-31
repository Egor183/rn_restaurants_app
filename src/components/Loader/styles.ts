import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale} from '@src/services/scale';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderText: {
    fontFamily: 'Roboto-Bold',
    fontSize: setModerateScale(24),
    color: COLORS.LIGHT_BLACK,
  },
});
