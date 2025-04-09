import { View } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type SocialIconProps = {
  icon: string;
};

export default function SocialIcon({ icon }: SocialIconProps) {
  return (
    <View className='border border-neutral-300 rounded-full w-20 h-20 flex items-center justify-center'>
      <FontAwesome5 name={icon} size={28} />
    </View>
  );
}
