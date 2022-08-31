import React, {FC, memo} from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';
import {Button, Icon} from '@rneui/themed';
import {COLORS} from '@src/constants';
import {Props} from './props';

import styles from './styles';

const ButtonBack: FC<Props> = ({
  iconSize = moderateVerticalScale(20),
  isLeftHeaderComponent = true,
  onPress,
}) => (
  <Button
    color={COLORS.TRANSPARENT}
    buttonStyle={isLeftHeaderComponent && styles.noPaddingLeft}
    onPress={onPress}>
    <Icon
      name="chevron-thin-left"
      color={COLORS.LIGHT_BLACK}
      size={iconSize}
      type="entypo"
    />
  </Button>
);

export default memo(ButtonBack);
