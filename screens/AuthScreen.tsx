import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

// components
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

// extras
import { GlobalStyles } from '../constants/styles';
import { AuthText } from '../constants/text';

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {/* heaeder */}
      <Text style={styles.title}>
        {isSignUp ? AuthText.signUpTitle : AuthText.signInTitle}
      </Text>
      <Text style={styles.subText}>
        {isSignUp ? AuthText.signUpSubText : AuthText.signInSubText}
      </Text>
      <View style={styles.formContainer}>
        {/* inputs */}
        <View style={styles.inputsContainer}>
          {isSignUp && (
            <Input labelText='Name' placeholderText='Ex. John Doe' />
          )}
          <Input labelText='Email' placeholderText='example@gmail.com' />
          <Input
            labelText='Password'
            placeholderText='••••••••••••••••'
            secureTextEntry={true}
            rightIcon={<Ionicons name='eye-off-outline' size={24} />}
          />
        </View>
        {isSignUp ? (
          <View style={styles.termsAndConditions}>
            <Checkbox color={GlobalStyles.colors.primary500} />
            <Text>
              Agree with <Text style={styles.linkText}>Terms & Condition</Text>
            </Text>
          </View>
        ) : (
          <Text style={[styles.linkText, styles.forgotPasswordLink]}>
            Forgot Password?
          </Text>
        )}
        <Button text='Sign In' onPress={() => {}} />
        {/* divider */}
        <View style={styles.altSignInTextContainer}>
          <View style={styles.divider} />
          <Text style={styles.altSignInText}>{`Or sign ${
            isSignUp ? 'up' : 'in'
          } with`}</Text>
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
          {isSignUp ? AuthText.signUpRedirectText : AuthText.signInRedirectText}{' '}
          <Text style={styles.linkText} onPress={() => setIsSignUp(!isSignUp)}>
            {`Sign ${isSignUp ? 'In' : 'Up'}`}
          </Text>
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
    fontWeight: '500',
    color: GlobalStyles.colors.gray700,
  },
  subText: {
    marginTop: 14,
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 250,
    color: GlobalStyles.colors.gray500,
  },
  formContainer: {
    marginTop: 40,
    width: '90%',
  },
  inputsContainer: {
    rowGap: 20,
    marginBottom: 20,
  },
  termsAndConditions: {
    flexDirection: 'row',
    columnGap: 10,
    marginBottom: 20,
  },
  linkText: {
    color: GlobalStyles.colors.primary400,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  forgotPasswordLink: {
    textAlign: 'right',
    marginBottom: 20,
  },
  altSignInTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 10,
    marginVertical: 30,
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
    marginBottom: 30,
  },
  signUpInText: {
    textAlign: 'center',
  },
});
