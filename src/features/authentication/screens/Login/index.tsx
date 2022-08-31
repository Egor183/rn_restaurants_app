import React, {FC, memo} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '@src/components/MainContainer';
import {GRADIENTS} from '@src/constants';
import InputRow from '@src/components/InputRow';
import {useBarStyle} from '@src/hooks';
import {useLogin} from '../../hooks';
import {LoginParametersType} from '../../services/api/login/types';

import styles from './styles';

const Login: FC = () => {
  const {handlePressSignIn, validationError, isLoading} = useLogin();
  const barStyle = useBarStyle();
  const initialValues: LoginParametersType = {email: '', password: ''};

  return (
    <MainContainer withPaddingHorizontal={false}>
      <LinearGradient
        colors={GRADIENTS.PURPLE_BLUE}
        style={styles.linearGradient}
        useAngle>
        <StatusBar barStyle={barStyle} />
      </LinearGradient>
      <View style={styles.loginFormContainer}>
        <Text style={styles.mainText}>Welcome Back</Text>
        <Text style={styles.additionalText}>
          Hello there, sign in to continue!
        </Text>
        <Formik initialValues={initialValues} onSubmit={handlePressSignIn}>
          {({handleChange, handleSubmit, values}) => {
            return (
              <View style={styles.formContainer}>
                <InputRow
                  label="User name or email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  isValueValid={validationError?.email}
                  editable={!isLoading}
                />
                <InputRow
                  label="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  isValueValid={validationError?.password}
                  editable={!isLoading}
                />
                <Pressable
                  style={[styles.button, isLoading && styles.inactiveButton]}
                  onPress={handleSubmit}
                  disabled={isLoading}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
              </View>
            );
          }}
        </Formik>
      </View>
    </MainContainer>
  );
};

export default memo(Login);
