import { Stack } from 'expo-router/stack';
import { View } from 'react-native'; // Import View from react-native
import '../../global.css';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
