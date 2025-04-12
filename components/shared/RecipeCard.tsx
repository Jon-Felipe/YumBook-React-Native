import { View, Text, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// extras
import { Recipe } from '@/utils/types';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <View className='relative mb-4 rounded-3xl overflow-hidden'>
      <View className='absolute top-0 left-0 right-0 p-4 z-10'>
        <View className='flex flex-row items-center justify-between'>
          <View className='bg-white py-2 px-3 rounded-full flex flex-row items-center gap-x-2'>
            <FontAwesome name='star' color='#f97316' />
            <Text className='text-sm font-semibold'>
              {recipe.averageRating} (1k+ Reviews)
            </Text>
          </View>
          <View className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <FontAwesome name='heart-o' size={18} />
          </View>
        </View>
      </View>
      <Image
        source={{ uri: recipe.imageUrl }}
        className='w-full h-72 object-cover'
      />
      <View className='absolute bottom-0 left-0 right-0 bg-neutral-100 py-2 px-4 rounded-t-2xl'>
        <Text className='font-semibold text-lg'>{recipe.title}</Text>
        <View className='mt-1'>
          <View className='flex flex-row items-center gap-x-1'>
            <View className='flex flex-row items-center gap-x-1'>
              <FontAwesome name='clock-o' color='#f97316' size={16} />
              <Text className='text-sm text-neutral-500'>
                {recipe.cookTimeMinutes} min
              </Text>
            </View>
            <Text className='text-neutral-400'>•</Text>
            <View className='flex flex-row items-center gap-x-1'>
              <Text className='text-sm text-neutral-500'>
                {recipe.difficulty}
              </Text>
            </View>
            <Text className='text-neutral-400'>•</Text>
            <View className='flex flex-row items-center gap-x-1'>
              <Text className='text-sm text-neutral-500'>
                by {recipe.author}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
