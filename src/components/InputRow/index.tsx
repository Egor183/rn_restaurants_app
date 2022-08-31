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
  onChangeText,
  value,
  editable,
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
      onChangeText={onChangeText}
      value={value}
      editable={editable}
    />
  );
};

export default memo(InputRow);
