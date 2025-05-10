import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="truck-delivery" size={96} color="#3949ab" />
      <Text style={styles.text}>Ухаалаг Тээврийн Замын Хяналтын Систем</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3949ab',
    textAlign: 'center',
  },
}); 