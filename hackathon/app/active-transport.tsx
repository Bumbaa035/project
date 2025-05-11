import React, { useEffect, useState, useRef } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";
import * as Location from 'expo-location';
import { MaterialIcons } from "@expo/vector-icons";
import { useActiveTransport } from "../context/ActiveTransportContext";
import { LinearGradient } from 'expo-linear-gradient';

const sections = [
  {
    label: "Торгуулиуд харах",
    icon: "gavel",
    onPress: (router: any) => router.push("/fine"),
  },
  {
    label: "Хэрэглэгчийн мэдээлэл",
    icon: "person",
    onPress: (router: any) => router.push("/user-info"),
  },
  {
    label: "Машины мэдээлэл",
    icon: "directions-car",
    onPress: (router: any) => router.push("/car-info"),
  },
  {
    label: "Тээвэрлэлтүүдийн түүх",
    icon: "history",
    onPress: () => {}, // TODO: add navigation
  },
  {
    label: "Цаг агаар",
    icon: "wb-sunny",
    onPress: () => {}, // TODO: add navigation
  },
];

export default function ActiveTransportPage() {
  const router = useRouter();
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const { setActiveTransport } = useActiveTransport();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleFinishTransport = () => {
    Alert.alert(
      "Тээвэрлэлт дуусгах",
      "Тээвэрлэлтийг дуусгахдаа итгэлтэй байна уу?",
      [
        {
          text: "Болих",
          style: "cancel"
        },
        {
          text: "Дуусгах",
          onPress: () => {
            setActiveTransport(false);
            router.push("/dashboard");
            router.replace("/dashboard");
          }
        }
      ]
    );
  };

  return (
    <LinearGradient colors={["#3949ab", "#6a1b9a"]} style={styles.container}>
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          />
        ) : (
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPlaceholderText}>Байршил тодорхойлогдсонгүй</Text>
          </View>
        )}
      </View>
      <View style={styles.bottomSheet}>
        {sections.map((section, idx) => (
          <TouchableOpacity
            key={section.label}
            style={styles.sectionButton}
            activeOpacity={0.85}
            onPress={() => section.onPress(router)}
          >
            <MaterialIcons name={section.icon as any} size={24} color="#3949ab" style={{ marginRight: 12 }} />
            <Text style={styles.sectionTitle}>{section.label}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.finishButton}
          activeOpacity={0.85}
          onPress={handleFinishTransport}
        >
          <MaterialIcons name="check-circle" size={24} color="#fff" style={{ marginRight: 12 }} />
          <Text style={styles.finishButtonText}>Тээвэрлэлт дуусгах</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 4,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mapPlaceholderText: {
    color: '#666',
    fontSize: 16,
  },
  bottomSheet: {
    flex: 6,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 18,
    justifyContent: "center",
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f6fd",
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
    shadowColor: "#3949ab",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#3949ab",
    flex: 1,
    textAlign: "left",
  },
  finishButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a1b9a",
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginTop: 10,
    shadowColor: "#6a1b9a",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  finishButtonText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
});
