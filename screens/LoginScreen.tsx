import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

// components
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

// extras
import { GlobalStyles } from '../styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* heaeder */}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subText}>Hi! Welcome back, you've been missed</Text>
      <View style={styles.formContainer}>
        {/* inputs */}
        <View style={styles.inputsContainer}>
          <Input labelText='Email' placeholderText='example@gmail.com' />
          <Input
            labelText='Password'
            placeholderText='••••••••••••••••'
            secureTextEntry={true}
            rightIcon={<Ionicons name='eye-off-outline' size={24} />}
          />
        </View>
        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
        <Button text='Sign In' onPress={() => {}} />
        {/* divider */}
        <View style={styles.altSignInTextContainer}>
          <View style={styles.divider} />
          <Text style={styles.altSignInText}>Or sign in with</Text>
          <View style={styles.divider} />
        </View>
        {/* socials sign in */}
        <View style={styles.socialIcons}>
          <View style={styles.socialIconContainer}>
            <FontAwesome name='apple' size={30} />
          </View>
          <View style={styles.socialIconContainer}>
            <FontAwesome name='google' size={30} />
          </View>
          <View style={styles.socialIconContainer}>
            <FontAwesome name='facebook' size={30} />
          </View>
        </View>
        {/* login or sign up text */}
        <Text style={styles.signUpInText}>
          Don't have an account?{' '}
          <Text style={styles.signUpInLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'semibold',
    letterSpacing: 1,
    color: GlobalStyles.colors.gray700,
  },
  subText: {
    marginTop: 14,
    fontSize: 14,
    color: GlobalStyles.colors.gray500,
  },
  formContainer: {
    marginTop: 60,
    width: '90%',
  },
  inputsContainer: {
    rowGap: 20,
    marginBottom: 15,
  },
  forgotPasswordLink: {
    color: GlobalStyles.colors.primary400,
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontWeight: '500',
    marginBottom: 20,
  },
  altSignInTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
    marginVertical: 40,
  },
  divider: {
    borderColor: GlobalStyles.colors.gray50,
    borderBottomWidth: 3,
    flex: 1,
  },
  altSignInText: {
    color: GlobalStyles.colors.gray500,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '80%',
    marginHorizontal: 'auto',
  },
  socialIconContainer: {
    borderColor: GlobalStyles.colors.gray50,
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  signUpInText: {
    textAlign: 'center',
  },
  signUpInLink: {
    color: GlobalStyles.colors.primary500,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
