import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-4xl'>HomeScreen</Text>
      <Link href={'/auth'}>Go to Auth Screen</Link>
    </View>
  );
}
