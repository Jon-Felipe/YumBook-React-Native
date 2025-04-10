import { View, Text, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
  return (
    <View className='flex flex-row items-center justify-between'>
      <View className='flex flex-row items-center gap-x-4'>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=6' }}
          className='w-12 h-12 rounded-full'
        />
        <Text className='text-xl font-medium'>Hello, Jon 👋</Text>
      </View>
      <View className='border border-neutral-200 rounded-full p-3'>
        <FontAwesome name='bell-o' size={20} />
      </View>
    </View>
  );
}
