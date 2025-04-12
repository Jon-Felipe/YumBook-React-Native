import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type tabBarIcon = {
  focused?: boolean;
  color?: string;
  size?: number;
};

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='(home)'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }: tabBarIcon) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          title: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color }: tabBarIcon) => (
            <FontAwesome size={28} name='compass' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Favourite',
          headerShown: false,
          tabBarIcon: ({ color }: tabBarIcon) => (
            <FontAwesome size={28} name='heart' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }: tabBarIcon) => (
            <FontAwesome size={28} name='user' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
