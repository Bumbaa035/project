import React, { useEffect, useState, useRef } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { io } from "socket.io-client";

const restrictedZone = [
  { latitude: 47.9186, longitude: 106.8530 },
  { latitude: 47.9226, longitude: 106.8570 },
  { latitude: 47.9286, longitude: 106.9595 },
  { latitude: 47.8970, longitude: 106.9445 },
  { latitude: 47.8990, longitude: 106.9345 },
  { latitude: 47.8960, longitude: 106.8875 },
  { latitude: 47.8910, longitude: 106.8725 },
  { latitude: 47.8970, longitude: 106.8570 },
];

export default function ActiveTransportPage() {
  const [location, setLocation] = useState(null);
  const [socket, setSocket] = useState(null);
  const router = useRouter();
  const locationWatcher = useRef<Location.LocationSubscription | null>(null);

  const sections = [
    {
      label: "Торгуулиуд харах",
      icon: "gavel",
      onPress: () => Alert.alert("Торгуулиуд харах хэсэг удахгүй нэмэгдэнэ."),
    },
    {
      label: "Хэрэглэгчийн мэдээлэл",
      icon: "person",
      onPress: () => router.push("/user-info"),
    },
    {
      label: "Машины мэдээлэл",
      icon: "directions-car",
      onPress: () => router.push("/car-info"),
    },
    {
      label: "Тээвэрлэлтүүдийн түүх",
      icon: "history",
      onPress: () => Alert.alert("Тээвэрлэлтүүдийн түүх хэсэг удахгүй нэмэгдэнэ."),
    },
    {
      label: "Цаг агаар",
      icon: "wb-sunny",
      onPress: () => Alert.alert("Цаг агаар хэсэг удахгүй нэмэгдэнэ."),
    },
  ];

  useEffect(() => {
    const newSocket = io("http://210.109.53.233:3001");
    setSocket(newSocket);

    newSocket.on("alert", (msg) => {
      Alert.alert("⚠️ Alert", msg);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);
useEffect(() => {
  (async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Байршил авах зөвшөөрөл олгогдоогүй байна.");
      return;
    }

    locationWatcher.current = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 5000,
        distanceInterval: 5,
      },
      (loc) => {
        const coords = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        };
        setLocation(coords);

        if (socket) {
          socket.emit("locationUpdate", {
            userId: "2", // TODO: replace with real userId
            lat: coords.latitude,
            lng: coords.longitude,
          });
        }
      }
    );
  })(); // <- CLOSE the async function

  return () => {
    locationWatcher.current?.remove();
  };
}, [socket]);

  // if (!location) {
  //   return (
  //     <View style={styles.mapPlaceholder}>
  //       <Text>Байршлыг тодорхойлж байна...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4 }}>{location && (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    showsUserLocation={true}
  >
    <Polygon
      coordinates={restrictedZone}
      fillColor="rgba(255,0,0,0.3)"
      strokeColor="red"
      strokeWidth={2}
    />
  </MapView>
)}

      </View>

      <View style={styles.bottomSheet}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.label}
            style={styles.sectionButton}
            activeOpacity={0.85}
            onPress={section.onPress}
          >
            <MaterialIcons name={section.icon} size={24} color="#3949ab" style={{ marginRight: 12 }} />
            <Text style={styles.sectionTitle}>{section.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
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
}});
