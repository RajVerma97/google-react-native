import { Stack } from 'expo-router/stack';
import '../../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Poppins from '../../assets/fonts/Poppins/Poppins-Regular.ttf';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    // Inter: require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    // Roboto: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    Poppins,
    // Poppins: require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    // Montserrat: require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    // OpenSans: require('../../assets/fonts/OpenSans/OpenSans-Regular.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
