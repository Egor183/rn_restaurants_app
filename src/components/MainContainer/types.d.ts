import {HeaderProps} from '../Header/props';

export interface Props extends HeaderProps {
  children: ReactNode;
  edges?: Edge[];
  backgroundColor?: string;
  withPaddingHorizontal?: boolean;
  withHeader?: boolean;
}
