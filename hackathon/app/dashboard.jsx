import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const user = {
  name: "Бат-Эрдэнэ",
  phone: "99112233",
  registerNumber: "АБ12345678",
};

const fines = [
  { id: 1, reason: "Хурд хэтрүүлсэн", amount: 20000, date: "2024-06-01" },
  { id: 2, reason: "Зөвшөөрөлгүй маршрут", amount: 30000, date: "2024-05-20" },
];

const transports = [
  { id: 1, from: "Улаанбаатар", to: "Дархан", date: "2024-05-15", status: "Дууссан" },
  { id: 2, from: "Дархан", to: "Эрдэнэт", date: "2024-04-10", status: "Дууссан" },
];

export default function DashboardPage() {
  const handleStartTransport = () => {
    Alert.alert("Тээвэрлэлт эхлүүлэх", "Тээвэрлэлт эхлүүлэх үйлдэл дараа нь backend-тэй холбогдоно.");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }} contentContainerStyle={{ padding: 20 }}>
      {/* Profile */}
      <View style={styles.profileBox}>
        <MaterialIcons name="account-circle" size={60} color="#3949ab" />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileInfo}>Утас: {user.phone}</Text>
        <Text style={styles.profileInfo}>Регистр: {user.registerNumber}</Text>
      </View>

      {/* Fines */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Торгуулиуд</Text>
        {fines.length === 0 ? (
          <Text style={styles.emptyText}>Торгууль байхгүй</Text>
        ) : (
          fines.map(fine => (
            <View key={fine.id} style={styles.fineItem}>
              <MaterialIcons name="error-outline" size={20} color="#d32f2f" />
              <Text style={styles.fineText}>{fine.reason} - {fine.amount}₮ ({fine.date})</Text>
            </View>
          ))
        )}
      </View>

      {/* Transport History */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Тээвэрлэлтүүдийн түүх</Text>
        {transports.length === 0 ? (
          <Text style={styles.emptyText}>Тээвэрлэлт байхгүй</Text>
        ) : (
          transports.map(tr => (
            <View key={tr.id} style={styles.transportItem}>
              <MaterialIcons name="local-shipping" size={20} color="#3949ab" />
              <Text style={styles.transportText}>
                {tr.from} → {tr.to} | {tr.date} | {tr.status}
              </Text>
            </View>
          ))
        )}
      </View>

      {/* Start Transport Button */}
      <TouchableOpacity style={styles.startBtn} onPress={handleStartTransport}>
        <MaterialIcons name="play-arrow" size={24} color="#fff" />
        <Text style={styles.startBtnText}>Тээвэрлэлт эхлүүлэх</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3949ab",
    marginTop: 8,
  },
  profileInfo: {
    fontSize: 15,
    color: "#555",
    marginTop: 2,
  },
  sectionBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3949ab",
    marginBottom: 8,
  },
  fineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  fineText: {
    marginLeft: 8,
    color: "#d32f2f",
    fontSize: 15,
  },
  emptyText: {
    color: "#888",
    fontStyle: "italic",
    fontSize: 15,
  },
  transportItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  transportText: {
    marginLeft: 8,
    color: "#3949ab",
    fontSize: 15,
  },
  startBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3949ab",
    borderRadius: 10,
    paddingVertical: 14,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
    shadowColor: "#3949ab",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 8,
    letterSpacing: 1,
  },
});