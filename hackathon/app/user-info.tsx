import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

// Temporary user data (will be replaced with backend data later)
const userData = {
  firstName: "Бат",
  lastName: "Эрдэнэ",
  phone: "99112233",
  registerNumber: "АБ12345678",
  profileImage: "https://via.placeholder.com/150", // Placeholder image
};

export default function UserInfoPage() {
  return (
    <LinearGradient colors={["#3949ab", "#6a1b9a"]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: userData.profileImage }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={24} color="#3949ab" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <InfoItem icon="person" label="Овог" value={userData.lastName} />
          <InfoItem icon="person" label="Нэр" value={userData.firstName} />
          <InfoItem icon="phone" label="Утас" value={userData.phone} />
          <InfoItem icon="badge" label="Регистр" value={userData.registerNumber} />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Хадгалах</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const InfoItem = ({ icon, label, value }: { icon: keyof typeof MaterialIcons.glyphMap; label: string; value: string }) => (
  <View style={styles.infoItem}>
    <MaterialIcons name={icon} size={24} color="#3949ab" />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 16,
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    position: "absolute",
    right: 20,
    top: 20,
    padding: 8,
  },
  infoSection: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  infoTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    color: "#000",
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: "#6a1b9a",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
