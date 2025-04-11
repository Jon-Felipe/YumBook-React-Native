// import { Link } from 'expo-router';
import { View } from 'react-native';

// components
import Header from '@/components/home/Header';
import PopularRecipes from '@/components/home/PopularRecipes';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-white p-5'>
      <Header />
      <View className='mt-8'>
        <PopularRecipes />
      </View>
      {/* <Link href={'/auth'}>Go to Auth Screen</Link> */}
    </View>
  );
}
