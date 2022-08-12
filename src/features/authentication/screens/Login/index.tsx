import React, {memo} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '@src/components/MainContainer';
import {COLORS} from '@src/constants';
import InputRow from '@src/components/InputRow';
import {useBarStyle} from '../../hooks';

import styles from './styles';

const Login = () => {
  // const {submit} = useLogin({email, password});
  const barStyle = useBarStyle();

  return (
    <MainContainer>
      <LinearGradient
        colors={COLORS.GRADIENTS.PURPLE_BLUE}
        style={styles.linearGradient}
        useAngle>
        <StatusBar barStyle={barStyle} />
      </LinearGradient>
      <View style={styles.loginFormContainer}>
        <Text style={styles.mainText}>Welcome Back</Text>
        <Text style={styles.additionalText}>
          Hello there, sign in to continue!
        </Text>
        <View style={styles.formContainer}>
          <InputRow label="User name or email" />
          <InputRow label="Password" secureTextEntry={true} />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </MainContainer>
  );
};

export default memo(Login);
