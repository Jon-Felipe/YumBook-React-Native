import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

// components

// extras
import { dummy_recipes } from '@/data/dummy_recipes';
import RecipeCard from '@/components/shared/RecipeCard';

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
    <View className='flex flex-1 bg-white p-5'>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
