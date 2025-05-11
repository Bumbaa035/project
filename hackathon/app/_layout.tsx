import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useActiveTransport, ActiveTransportProvider } from "../context/ActiveTransportContext";
import React, {useEffect} from "react";

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
            <Stack.Screen name="active-transport" options={{ headerShown: false }} />
            <Stack.Screen name="dashboard" options={{ 
              headerShown: false,
              animation: 'none'
            }} />
            <Stack.Screen 
              name="fine" 
              options={{ 
                headerShown: true,
                title: "Торгуулиуд",
                headerBackTitle: "Буцах"
              }} 
            />
            <Stack.Screen 
              name="user-info" 
              options={{ 
                headerShown: true,
                title: "Хэрэглэгчийн мэдээлэл",
                headerBackTitle: "Буцах"
              }} 
            />
            <Stack.Screen 
              name="car-info" 
              options={{ 
                headerShown: true,
                title: "Машины мэдээлэл",
                headerBackTitle: "Буцах"
              }} 
            />
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
      segments[0] === "(tabs)" &&
      segments[1] === "home"
    ) {
      router.replace("/active-transport");
    }
  }, [segments, activeTransport, router]);

  return <>{children}</>;
}
