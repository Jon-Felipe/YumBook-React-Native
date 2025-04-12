import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

// extras
import { dummy_categories } from '@/data/dummy_categories';

export default function CategoryScreen() {
  const { navigate } = useRouter();

  return (
    <View className='flex flex-1 bg-white'>
      <View className='flex flex-row items-center justify-center flex-wrap gap-6 p-5'>
        {dummy_categories.map((category) => (
          <Pressable
            key={category.id}
            onPress={() =>
              navigate({
                pathname: './recipes',
                params: { categoryId: category.id },
              })
            }
          >
            <View className='relative flex items-center justify-center rounded-full w-28 h-28 overflow-hidden'>
              <Image
                source={category.image! as any}
                className='w-full h-full'
                resizeMode='cover'
              />
              <View className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25' />
              <Text className='absolute text-white text-lg font-semibold text-center'>
                {category.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
