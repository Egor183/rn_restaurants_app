import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '@src/constants';
import {setModerateScale} from '@src/services/scale';

const styles = ScaledSheet.create({
  badge: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: setModerateScale(6),
    paddingHorizontal: setModerateScale(10),
    borderRadius: 5,
    overflow: 'hidden',
    fontFamily: 'Roboto-Medium',
    color: COLORS.LIGHT_BLACK,
    letterSpacing: setModerateScale(0.1),
    fontSize: setModerateScale(11),
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
  },
});

export default styles;
