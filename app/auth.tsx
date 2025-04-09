import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

// components
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import SocialIcon from '@/components/ui/SocialIcon';

export default function AuthScreen() {
  const router = useRouter();

  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <View className='flex flex-1 items-center justify-center p-8 bg-white'>
      <Text className='text-4xl font-medium'>
        {isSignUp ? 'Create an Account' : 'Sign In'}
      </Text>
      <Text className='text-sm text-neutral-400 mt-4 max-w-64 text-center'>
        {isSignUp
          ? 'Fill your information below or register with your social account.'
          : "Hi! Welcome back, you've been missed"}
      </Text>
      <View className='w-full mt-8 flex flex-col gap-y-6'>
        {isSignUp && (
          <Input
            label='Name'
            placeholder='Ex. John Doe'
            value=''
            onChange={(text) => console.log(text)}
          />
        )}
        <Input
          label='Email'
          placeholder='example@gmail.com'
          value=''
          onChange={(text) => console.log(text)}
        />
        <Input
          label='Password'
          placeholder='************'
          value=''
          onChange={(text) => console.log(text)}
          iconRight={<FontAwesome5 name='eye-slash' size={18} />}
        />
      </View>
      <View className='w-full mt-4'>
        <Text className='font-semibold text-right underline text-orange-500'>
          Forgot Password?
        </Text>
      </View>
      <View className='w-full mt-6'>
        <Button
          text={`Sign ${isSignUp ? 'Up' : 'In'}`}
          onPress={() => {
            router.navigate('/(logged-in)/(tabs)');
          }}
        />
      </View>
      <View className='mt-10 w-full'>
        <Text className='text-center'>{`Or sign ${
          isSignUp ? 'up' : 'in'
        } with`}</Text>
      </View>
      <View className='flex flex-row items-center justify-evenly w-full mt-10'>
        <SocialIcon icon='apple' />
        <SocialIcon icon='google' />
        <SocialIcon icon='facebook-f' />
      </View>
      <View className='mt-14'>
        <Text onPress={() => setIsSignUp(!isSignUp)}>
          {`${isSignUp ? 'Already' : "Don't"} have an account?`}{' '}
          <Text className='text-orange-500 font-medium underline'>{`Sign ${
            isSignUp ? 'in' : 'up'
          }`}</Text>
        </Text>
      </View>
    </View>
  );
}
