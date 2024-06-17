import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { FontSource, useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import Constants from "expo-constants"
import { WorkSans_600SemiBold } from '@expo-google-fonts/work-sans';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().catch(console.error)

function RootLayout() {
  /**
   * Fonts required for mockup
   */
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf') as FontSource,
    WorkSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch(console.error)
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    // Disable theme switching for now
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  )
}

let AppEntryPoint = RootLayout

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint
