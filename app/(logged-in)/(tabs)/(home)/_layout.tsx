import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='category'
        options={{
          title: 'Categories',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          elevation: 0,
          showdowColor: 'transparent',
        }}
      />
    </Stack>
  );
}
