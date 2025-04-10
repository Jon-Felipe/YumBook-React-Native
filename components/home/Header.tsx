import { View, Text, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// components
import Search from '../ui/Search';

export default function Header() {
  return (
    <View>
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
      <View className='mt-8 flex flex-row items-center justify-between gap-x-4'>
        <View className='flex-1'>
          <Search placeholder='Search Any Recipe...' />
        </View>
        <View className='flex items-center justify-center flex-2 border border-neutral-300 w-10 h-10 rounded-lg'>
          <FontAwesome name='sliders' size={20} />
        </View>
      </View>
    </View>
  );
}
