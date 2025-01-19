import { Stack } from 'expo-router/stack';
import '../../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Poppins from '../../assets/fonts/Poppins/Poppins-Regular.ttf';
import Inter from '../..//assets/fonts/Inter/Inter-Regular.ttf';
import Roboto from '../../assets/fonts/Roboto/Roboto-Regular.ttf';
import Montserrat from '../../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import OpenSans from '../../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter,
    Roboto,
    Poppins,
    Montserrat,
    OpenSans,
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
        {/* <Stack.Screen name="[uri]" options={{ headerShown: false }} />, */}
      </Stack>
    </QueryClientProvider>
  );
}
