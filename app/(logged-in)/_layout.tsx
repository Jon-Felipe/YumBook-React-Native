import { Stack, Redirect } from 'expo-router';

export default function AuthLayout() {
  // const isAuthenticated = false;

  // if (!isAuthenticated) {
  //   return <Redirect href='/auth' />;
  // }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='recipes/index' />
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
