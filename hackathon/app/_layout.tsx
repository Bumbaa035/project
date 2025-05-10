import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useEffect } from "react";
import { useActiveTransport, ActiveTransportProvider } from "../context/ActiveTransportContext";
import React from "react";


import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ActiveTransportProvider>
      <NavigationGuard>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </NavigationGuard>
    </ActiveTransportProvider>
  );
}

// Navigation guard component
function NavigationGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const segments = useSegments();
  const { activeTransport, setActiveTransport } = useActiveTransport();

  useEffect(() => {
    if (
      activeTransport &&
      !segments[0]?.startsWith("active-transport")
    ) {
      router.replace("/active-transport");
    }
  }, [segments, activeTransport, router]);

  return <>{children}</>;
}
