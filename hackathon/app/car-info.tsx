import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Temporary car data (will be replaced with backend data later)
const carData = {
  axleCount: 2,
  buildYear: "2020",
  cabinNumber: "CAB123",
  capacity: "5 tons",
  className: "Truck",
  colorName: "Blue",
  countryName: "Mongolia",
  fuelType: "Diesel",
  height: "2.5m",
  importDate: "2023-01-01",
  length: "6m",
  manCount: 2,
  markName: "Toyota",
  mass: "3 tons",
  modelName: "Hino",
  motorNumber: "MOT123456",
  ownerType: "Private",
  plateNumber: "АБ12345678",
  type: "Commercial",
  weight: "3 tons",
  wheelPosition: "Left",
  width: "2.2m",
};

export default function CarInfoPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Машины мэдээлэл</Text>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={24} color="#3949ab" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <InfoItem icon="directions-car" label="Марк" value={carData.markName} />
        <InfoItem icon="directions-car" label="Модель" value={carData.modelName} />
        <InfoItem icon="badge" label="Улсын дугаар" value={carData.plateNumber} />
        <InfoItem icon="color-lens" label="Өнгө" value={carData.colorName} />
        <InfoItem icon="calendar-today" label="Үйлдвэрлэсэн он" value={carData.buildYear} />
        <InfoItem icon="local-gas-station" label="Түлш" value={carData.fuelType} />
        <InfoItem icon="people" label="Суудлын тоо" value={carData.manCount.toString()} />
        <InfoItem icon="straighten" label="Урт" value={carData.length} />
        <InfoItem icon="height" label="Өндөр" value={carData.height} />
        <InfoItem icon="straighten" label="Өргөн" value={carData.width} />
        <InfoItem icon="scale" label="Жин" value={carData.weight} />
        <InfoItem icon="engineering" label="Моторын дугаар" value={carData.motorNumber} />
        <InfoItem icon="business" label="Кабины дугаар" value={carData.cabinNumber} />
        <InfoItem icon="public" label="Улс" value={carData.countryName} />
        <InfoItem icon="category" label="Төрөл" value={carData.type} />
        <InfoItem icon="class" label="Ангилал" value={carData.className} />
        <InfoItem icon="event" label="Импортын огноо" value={carData.importDate} />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Хадгалах</Text>
      </TouchableOpacity>
    </ScrollView>
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
    backgroundColor: "#f3f6fd",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3949ab",
  },
  editButton: {
    padding: 8,
  },
  infoSection: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 16,
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
    backgroundColor: "#3949ab",
    margin: 20,
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
