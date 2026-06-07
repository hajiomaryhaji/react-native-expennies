import { SplashScreen, Stack } from "expo-router";
import "@/global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
    const [fontLoaded] = useFonts({
        'sans-regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'sans-bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'sans-medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'sans-semibold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'sans-extrabold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'sans-light': require('../assets/fonts/PlusJakartaSans-Light.ttf')
    });

    useEffect(() => {
        // Hide splash only when both fonts and auth are loaded
        if (fontLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontLoaded]);

    // Don't render app until both are ready
    if (!fontLoaded) return null;

    return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <RootLayoutContent />
      </ClerkProvider>

  );
}
