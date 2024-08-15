import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import 'react-native-gesture-handler';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cashier-login" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="(setting)" options={{ headerTitle: 'Setting' }} />
      </Stack>
  );
}