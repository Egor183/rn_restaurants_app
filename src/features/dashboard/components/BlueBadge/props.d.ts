import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type Props = {
  mainText?: string;
  additionalText?: string;
  containerStyles?: StyleProp<ViewStyle>;
  mainTextStyles?: StyleProp<TextStyle>;
};
