import { Stack } from 'expo-router';
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='auth' options={{ headerShown: false }} />
      <Stack.Screen name='(logged-in)' options={{ headerShown: false }} />
    </Stack>
  );
}
