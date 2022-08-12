import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  label: string;
  secureTextEntry?: boolean;
  isValueValid?: boolean;
  renderErrorMessage?: boolean;
}
