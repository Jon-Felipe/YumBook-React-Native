import { Link } from 'expo-router';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';

// components
import Header from '@/components/home/Header';
import PopularRecipes from '@/components/home/PopularRecipes';
import Pill from '@/components/ui/Pill';
import RecipeCard from '@/components/shared/RecipeCard';

// extras
import { dummy_categories } from '@/data/dummy_categories';
import { dummy_recipes } from '@/data/dummy_recipes';

export default function HomeScreen() {
  const renderHeader = () => (
    <View className='bg-white'>
      {/* header */}
      <Header />

      {/* popular recipe scroll list */}
      <View className='mt-8'>
        <PopularRecipes />
      </View>

      {/* category pill scroll list */}
      <View className='mt-8'>
        <View className='flex flex-row items-center justify-between mb-2'>
          <Text className='text-lg font-semibold'>Categories</Text>
          <Link href='./category' asChild>
            <Pressable>
              <Text className='text-neutral-400'>See All</Text>
            </Pressable>
          </Link>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummy_categories.slice(0, 6).map((category) => (
            <View key={category.id} className='mr-2'>
              <Pill text={category.name} icon={category.icon} />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* list of recipes title */}
      <View className='mt-8 mb-4'>
        <Text className='text-xl font-semibold'>Recipes For You</Text>
      </View>
      {/* <Link href={'/auth'}>Go to Auth Screen</Link> */}
    </View>
  );

  return (
    <View className='p-5 bg-white'>
      <FlatList
        data={dummy_recipes}
        renderItem={({ item }) => <RecipeCard recipe={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
