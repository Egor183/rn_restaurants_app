import {ScaledSheet} from 'react-native-size-matters';
import {setModerateScale} from '@src/services/scale';

export default ScaledSheet.create({
  mainContainer: {
    flex: 1,
  },

  paddingHorizontal: {
    paddingHorizontal: setModerateScale(24),
  },
});
