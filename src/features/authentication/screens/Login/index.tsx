import React, {memo} from 'react';
import {Pressable, StatusBar, Text, useColorScheme, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainContainer from '@src/components/MainContainer';
import {COLORS, THEME} from '@src/constants';
import {useLogin} from '../../hooks';
import InputRow from './InputRow';

import styles from './styles';

const Login = () => {
  const isDarkMode = useColorScheme() === THEME.THEMES.DARK;
  var password = '';
  var email = '';

  const {submit} = useLogin({email, password});

  const barStyle = isDarkMode
    ? THEME.STATUS_BAR_THEMES.LIGHT_CONTENT
    : THEME.STATUS_BAR_THEMES.DARK_CONTENT;

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
          Hello there, sign in to continue
        </Text>
        <View style={styles.formContainer}>
          <InputRow label="Email" value={email} onChangeText={() => null} />
          <InputRow
            label="Password"
            value={password}
            onChangeText={() => null}
            secureTextEntry={true}
          />
          <Pressable onPress={submit} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </MainContainer>
  );
};

export default memo(Login);
