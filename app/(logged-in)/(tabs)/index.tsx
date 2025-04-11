// import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

// components
import Header from '@/components/home/Header';
import PopularRecipes from '@/components/home/PopularRecipes';
import { dummy_categories } from '@/data/dummy_categories';
import Pill from '@/components/ui/Pill';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-white p-5'>
      <Header />
      <View className='mt-8'>
        <PopularRecipes />
      </View>
      <View className='mt-8'>
        <View className='flex flex-row items-center justify-between mb-2'>
          <Text className='text-lg font-semibold'>Categories</Text>
          <Text className='text-neutral-400'>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummy_categories.map((category) => (
            <View key={category.id} className='mr-2'>
              <Pill text={category.name} icon={category.imageUrl} />
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <Link href={'/auth'}>Go to Auth Screen</Link> */}
    </View>
  );
}
