import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// components
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AuthScreen() {
  return (
    <View className='flex flex-1 items-center justify-center p-8 bg-white'>
      <Text className='text-4xl font-medium'>Sign In</Text>
      <Text className='text-sm text-neutral-400 mt-4'>
        Hi! Welcome back, you've been missed
      </Text>
      <View className='w-full mt-16 flex flex-col gap-y-4'>
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
      <View className='w-full mt-8'>
        <Button text='Sign In' />
      </View>
    </View>
  );
}
