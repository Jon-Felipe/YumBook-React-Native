import { View, Text } from 'react-native';
import React from 'react';

// components
import Input from '@/components/ui/Input';

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
        />
      </View>
    </View>
  );
}
