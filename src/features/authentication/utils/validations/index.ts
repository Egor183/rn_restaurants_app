import {LoginParametersType} from '../../services/api/login/types.d';

const emailRegex = /^[A-Z0-9._%+-]{1,}[@][A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateAuth = ({
  email,
  password,
}: LoginParametersType): LoginParametersType | undefined => {
  const errors = {email: '', password: ''};
  if (!email) {
    errors.email = 'Required Email';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!password) {
    errors.password = 'Required Password';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors.email || errors.password ? errors : undefined;
};
