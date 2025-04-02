import { StatusBar } from 'expo-status-bar';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';

const RootStack = createNativeStackNavigator({
  // initialRouteName: 'Home',
  screens: {
    Auth: {
      screen: AuthScreen,
      options: {
        headerShown: false,
      },
    },
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Navigation />
    </>
  );
}
