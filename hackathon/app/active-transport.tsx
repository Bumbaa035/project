import  React, {useEffect, useState }from "react";
import {Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import { useRouter } from "expo-router";
import * as Location from 'expo-location';
import { MaterialIcons } from "@expo/vector-icons";

const sections = [
  {
    label: "Торгуулиуд харах",
    icon: "gavel",
    onPress: (router: any) => {}, // TODO: add navigation
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
    onPress: (router: any) => {}, // TODO: add navigation
  },
  {
    label: "Цаг агаар",
    icon: "wb-sunny",
    onPress: (router: any) => {}, // TODO: add navigation
  },
];

export default function ActiveTransportPage() {
  const router = useRouter();
  const { setActiveTransport } = useActiveTransport();

  const [location, setLocation] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://210.109.53.233:3001'); // Change to your IP
    setSocket(newSocket);
    // Listen for alerts from the server
    newSocket.on('alert', (msg) => {
      Alert.alert('⚠️ Alert', msg);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);
  
  useEffect(() => {
    let locationWatcher = null;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      // Start watching user's location
      locationWatcher = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000, // every 3 seconds
          distanceInterval: 5, // or every 5 meters
        },
        (loc) => {
          const coords = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude
          };
          setLocation(coords);

          if (socket) {
            socket.emit('locationUpdate', {
              lat: coords.latitude,
              lng: coords.longitude
            });
          }
        }
      );
      })();
    }, []);
return (
  <View style={{ flex: 1 }}>
    {/* Top 40%: Map */}
    <View style={{ flex: 4 }}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      </View>
      {/* Bottom 60%: Info and buttons */}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
