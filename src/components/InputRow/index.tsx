import React, {FC, memo} from 'react';
import {Input} from '@rneui/themed';
import {Props} from './props';
import {useInputRowRightIcon} from './hooks';

import styles from './styles';

const InputRow: FC<Props> = ({
  label,
  isValueValid,
  secureTextEntry,
  renderErrorMessage = false,
}) => {
  const rightIcon = useInputRowRightIcon(isValueValid);

  return (
    <Input
      label={label}
      rightIcon={rightIcon}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
      secureTextEntry={secureTextEntry}
      renderErrorMessage={renderErrorMessage}
    />
  );
};

export default memo(InputRow);
