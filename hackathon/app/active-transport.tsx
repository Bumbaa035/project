import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MapView from "react-native-maps";

export default function ActiveTransportPage() {
  return (
    <View style={{ flex: 1 }}>
      {/* Top 40%: Map */}
      <View style={{ flex: 4 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 47.918873,
            longitude: 106.917701,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        />
      </View>
      {/* Bottom 60%: Info and buttons */}
      <View style={{ flex: 6, backgroundColor: "#fff", borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 18 }}>
        <TouchableOpacity style={styles.fineBtn}>
          <Text style={styles.fineBtnText}>Торгуулиуд харах</Text>
        </TouchableOpacity>
        {/* User info, car info, transport history, weather sections */}
        <Text style={styles.sectionTitle}>Хэрэглэгчийн мэдээлэл</Text>
        {/* ... */}
        <Text style={styles.sectionTitle}>Машины мэдээлэл</Text>
        {/* ... */}
        <Text style={styles.sectionTitle}>Тээвэрлэлтүүдийн түүх</Text>
        {/* ... */}
        <Text style={styles.sectionTitle}>Цаг агаар</Text>
        {/* ... */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fineBtn: {
    backgroundColor: "#3949ab",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  fineBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    color: "#3949ab",
  },
});