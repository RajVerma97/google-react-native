import { Stack } from 'expo-router/stack';
import '../../global.css';
export default function Layout() {
  console.log('hello');
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
