import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

// extras
import { dummy_recipes } from '@/data/dummy_recipes';

export default function RecipesScreen() {
  const { title, categoryId } = useLocalSearchParams();

  const recipes = dummy_recipes.filter((recipe) =>
    recipe.categoryId.includes(categoryId.toString())
  );

  if (recipes.length === 0) {
    return (
      <View className='flex flex-1 items-center justify-center bg-white'>
        <Text className='text-xl font-semibold'>
          No recipes found for this category
        </Text>
      </View>
    );
  }

  return (
    <View>
      {recipes.map((recipe) => (
        <Text key={recipe.id}>{recipe.title}</Text>
      ))}
    </View>
  );
}
