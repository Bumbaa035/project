import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const features = [
  {
    icon: <MaterialIcons name="assignment" size={24} color="#3949ab" />,
    title: 'Тээврийн хэрэгслийн бүртгэл',
    desc: 'Жолооч, ачааны төрөл, маршрут'
  },
  {
<<<<<<< HEAD
    icon: <MaterialIcons name="gps-fixed" size={32} color="#3949ab" />,
    title: 'GPS байршлын хяналт',
    desc: 'Машины байршлыг бодит цагт хянах, зөвшөөрөгдсөн маршрутаар явж буй эсэхийг шалгах.',
    button: '/active-transport'
=======
    icon: <MaterialIcons name="gps-fixed" size={24} color="#3949ab" />,
    title: 'GPS хяналт',
    desc: 'Бодит цагт байршил хянах'
>>>>>>> f3ec67b15d0b5a932d951b8f8c3d8d0845cf17f5
  },
  {
    icon: <MaterialIcons name="notifications-active" size={24} color="#3949ab" />,
    title: 'Анхааруулга',
    desc: 'Push notification, SMS, email'
  },
  {
    icon: <MaterialIcons name="cloud" size={24} color="#3949ab" />,
    title: 'Цаг агаар',
    desc: 'Маршрутын цаг агаар'
  }
];

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/login');
  };

  return (
    <LinearGradient colors={["#3949ab", "#6a1b9a"]} style={styles.gradient}>
      <View style={styles.centered}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons name="truck-delivery" size={70} color="#fff" style={styles.logoShadow} />
        </View>
        <Text style={styles.title}>Ухаалаг Тээврийн Замын Хяналтын Систем</Text>
        <Text style={styles.subtitle}>
          Хортой, шатамхай ачаа тээвэрлэгчдэд зориулсан GPS хяналт, маршрут, мэдэгдэл систем.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={handleStart} activeOpacity={0.85}>
          <Text style={styles.startButtonText}>Эхлэх</Text>
        </TouchableOpacity>
        <View style={styles.featuresGrid}>
          {features.map((f, i) => (
            <View key={i} style={styles.featureGridCard}>
              <View style={styles.iconContainer}>
                {React.cloneElement(f.icon, { size: 24 })}
              </View>
              <Text style={styles.featureGridTitle}>{f.title}</Text>
              <Text style={styles.featureGridDesc}>{f.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
  },
  startButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  startButtonText: {
    color: '#3949ab',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 35,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  logoShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  featuresGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 2,
    gap: 10,
  },
  featureGridCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    backgroundColor: 'rgba(57, 73, 171, 0.08)',
    borderRadius: 10,
    padding: 7,
    marginBottom: 8,
  },
  featureGridTitle: {
    fontSize: 13,
    color: '#3949ab',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 3,
  },
  featureGridDesc: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
    lineHeight: 15,
  }
}); 