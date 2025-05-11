import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const features = [
  {
    icon: <MaterialIcons name="assignment" size={32} color="#3949ab" />,
    title: 'Тээврийн хэрэгслийн бүртгэл',
    desc: 'Жолооч болон ачааны төрөл бүртгэх, зөвшөөрөгдсөн маршрут сонгох.',
    button: '/home'
  },
  {
    icon: <MaterialIcons name="gps-fixed" size={32} color="#3949ab" />,
    title: 'GPS байршлын хяналт',
    desc: 'Машины байршлыг бодит цагт хянах, зөвшөөрөгдсөн маршрутаар явж буй эсэхийг шалгах.',
    button: '/active-transport'
  },
  {
    icon: <MaterialIcons name="notifications-active" size={32} color="#3949ab" />,
    title: 'Анхааруулга, мэдэгдэл',
    desc: 'Дүрэм зөрчсөн тохиолдолд push notification, SMS, email илгээх.',
    button: '/alert'
  },
  {
    icon: <MaterialIcons name="cloud" size={32} color="#3949ab" />,
    title: 'Цаг агаар, торгууль',
    desc: 'Ойролцоох цаг агаарын мэдээлэл, торгууль бодох.',
    button: '/fine'
  },
];

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/login');
  };
  const handleFine = () => {
    router.push('/fine');
  }
  return (
    <LinearGradient colors={["#3949ab", "#6a1b9a"]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.centered} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons name="truck-delivery" size={90} color="#fff" style={styles.logoShadow} />
        </View>
        <Text style={styles.title}>Ухаалаг Тээврийн Замын Хяналтын Систем</Text>
        <Text style={styles.subtitle}>
          Хортой, шатамхай ачаа тээвэрлэгчдэд зориулсан GPS хяналт, зөвшөөрөгдсөн маршрут, автомат мэдэгдэл илгээх систем.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.85}>
          <Text style={styles.startButtonText}>Эхлэх</Text>
        </TouchableOpacity>
        <View style={styles.featuresGrid}>
          {features.map((f, i) => (
            <TouchableOpacity onPress={() => router.push(f.button)} key={i} style={styles.featureGridCard}>
              {React.cloneElement(f.icon, { size: 40 })}
              <Text style={styles.featureGridTitle}>{f.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 12,
    paddingTop: 80,
  },
  startButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 18,
  },
  startButtonText: {
    color: '#3949ab',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  logoContainer: {
    backgroundColor: '#5e35b1',
    borderRadius: 60,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  logoShadow: {
    textShadowColor: '#222',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 22,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    marginBottom: 12,
    rowGap: 16,
    columnGap: 8,
  },
  featureGridCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  featureGridTitle: {
    fontSize: 15,
    color: '#3949ab',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
}); 