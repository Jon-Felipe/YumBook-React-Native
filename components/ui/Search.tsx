import { View, TextInput } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  return (
    <View className='flex flex-row items-center gap-x-4 bg-neutral-100 rounded-full px-4'>
      <FontAwesome name='search' size={20} color='#737373' />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#737373'}
        className='w-full'
      />
    </View>
  );
}
