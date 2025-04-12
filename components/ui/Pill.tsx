import { View, Text, Image } from 'react-native';
import React from 'react';

type PillProps = {
  text: string;
  icon?: any;
};

export default function Pill({ text, icon }: PillProps) {
  return (
    <View className='flex flex-row items-center justify-between gap-x-2 border border-neutral-200 rounded-full px-4 py-2'>
      {icon && <Image source={icon} className='w-4 h-4' />}
      <Text>{text}</Text>
    </View>
  );
}
