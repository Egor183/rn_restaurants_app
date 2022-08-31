import {ScaledSheet} from 'react-native-size-matters';
import {setModerateVerticalScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  restaurantCellContainer: {
    marginTop: setModerateVerticalScale(20),
  },
});

export default styles;
