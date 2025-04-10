import { Link } from 'expo-router';
import { Text, View } from 'react-native';

// components
import Header from '@/components/home/Header';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-white p-8'>
      <Header />
      {/* <Link href={'/auth'}>Go to Auth Screen</Link> */}
    </View>
  );
}
