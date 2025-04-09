import { GestureResponderEvent, Pressable, Text } from 'react-native';
import React from 'react';

type ButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className='bg-orange-500 py-4 w-full rounded-full'
    >
      <Text className='text-lg font-medium text-center text-white'>{text}</Text>
    </Pressable>
  );
}
