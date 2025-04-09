import { Pressable, Text } from 'react-native';
import React from 'react';

type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <Pressable className='bg-orange-500 py-4 w-full rounded-full'>
      <Text className='text-lg font-medium text-center text-white'>{text}</Text>
    </Pressable>
  );
}
