import { View, Text } from 'react-native';
import React from 'react';

// extras
import { dummy_categories } from '@/data/dummy_categories';

export default function CategoryScreen() {
  return (
    <View className='flex flex-1 bg-white'>
      <View className='flex flex-row items-center justify-center flex-wrap gap-6 p-5'>
        {dummy_categories.map((category) => (
          <View
            key={category.id}
            className='flex items-center justify-center border rounded-full w-28 h-28'
          >
            <Text>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
