import { Stack } from 'expo-router/stack';
import '../../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Inter from '../..//assets/fonts/Inter/Inter-Regular.ttf';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="search" options={{ headerShown: false }} />
        <Stack.Screen
          name="webview/[uri]"
          options={{ headerShown: true, headerTitle: 'Web View', headerBackTitle: '' }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
