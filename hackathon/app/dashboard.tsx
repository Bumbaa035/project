import React, { useState , useRef} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Modal, TextInput, Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";
import { useActiveTransport } from "../context/ActiveTransportContext";

const user = {
  name: "Бат-Эрдэнэ",
  phone: "99112233",
  registerNumber: "АБ12345678",
};

const initialFines = [
  { id: 1, reason: "Хурд хэтрүүлсэн", amount: 20000, date: "2024-06-01", paid: true },
  { id: 2, reason: "Зөвшөөрөлгүй маршрут", amount: 30000, date: "2024-05-20", paid: false },
];

const initialTransports = [
  { id: 1, from: "Улаанбаатар", to: "Дархан", date: "2024-05-15", status: "Дууссан" ,carSerial: "АБ12345678"},
  { id: 2, from: "Дархан", to: "Эрдэнэт", date: "2024-04-10", status: "Дууссан" ,carSerial: "АБ12345678"},
];

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [carSerial, setCarSerial] = useState("");
  const [transports, setTransports] = useState(initialTransports);
  const [fines, setFines] = useState(initialFines);
  const [serialNumberDigits, setSerialNumberDigits] = useState("");
  const [serialNumberLetters, setSerialNumberLetters] = useState("");
  const lettersInputRef = useRef<TextInput>(null);
  const router = useRouter();
  const { activeTransport } = useActiveTransport();

  const paidPercent = fines.length === 0 ? 0 : Math.round((fines.filter(f => f.paid).length / fines.length) * 100);

  const handleStartTransport = () => {
    setShowModal(true);
  };

  const handleAddTransport = () => {
    const serial = serialNumberDigits + serialNumberLetters;
    if (serialNumberDigits.length !== 4 || !/^[0-9]{4}$/.test(serialNumberDigits)) {
      Alert.alert("Анхаар!", "Серийн дугаарын эхний 4 оронтой тоог зөв оруулна уу.");
      return;
    }
    if (!serialNumberLetters.trim()) {
      Alert.alert("Анхаар!", "Серийн дугаарын үсгийг оруулна уу.");
      return;
    }
    if (!serial || serial.length < 5) {
      Alert.alert("Анхаар!", "Машины серийн дугаараа оруулна уу.");
      return;
    }
    setTransports([
      ...transports,
      {
        id: transports.length + 1,
        from: "Улаанбаатар",
        to: "Шинэ чиглэл",
        date: new Date().toISOString().slice(0, 10),
        status: "Идэвхтэй",
        carSerial: serial,
      },
    ]);
    setSerialNumberDigits("");
    setSerialNumberLetters("");
    setShowModal(false);
    router.push("./active-transport");
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#f3f6fd" }} contentContainerStyle={{ padding: 20 }}>
        {/* Profile + Animation */}
        <View style={styles.profileBox}>
          <View style={styles.avatarCircle}>
            <MaterialCommunityIcons name="account" size={48} color="#fff" />
          </View>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileInfo}>Утас: {user.phone}</Text>
          <Text style={styles.profileInfo}>Регистр: {user.registerNumber}</Text>
          <LottieView
            source={require("../assets/animation/Animation - 1746898574646.json")}
            autoPlay
            loop={false}
            style={{ width: 80, height: 80, marginTop: 10 }}
          />
        </View>

        {/* Fines + Progress Bar */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>Торгуулиуд</Text>
          <Text style={{ fontWeight: "bold", color: "#3949ab" }}>
            Торгуулийн төлөлт: {paidPercent}%
          </Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${paidPercent}%` }]} />
          </View>
          {fines.length === 0 ? (
            <Text style={styles.emptyText}>Торгууль байхгүй</Text>
          ) : (
            fines.map(fine => (
              <View key={fine.id} style={styles.fineCard}>
                <MaterialIcons
                  name={fine.paid ? "check-circle" : "error-outline"}
                  size={24}
                  color={fine.paid ? "#43a047" : "#d32f2f"}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.fineReason}>{fine.reason}</Text>
                  <Text style={styles.fineAmount}>{fine.amount.toLocaleString()}₮</Text>
                  <Text style={styles.fineDate}>{fine.date}</Text>
                  <Text style={{ color: fine.paid ? "#43a047" : "#d32f2f", fontWeight: "bold" }}>
                    {fine.paid ? "Төлөгдсөн" : "Төлөгдөөгүй"}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>

        {/* Transport History + Chart */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>Тээвэрлэлтүүдийн түүх</Text>
          <LineChart
            data={{
              labels: ["3-р сар", "4-р сар", "5-р сар", "6-р сар"],
              datasets: [{ data: [1, 1, 1, transports.length - 3] }]
            }}
            width={Dimensions.get("window").width - 60}
            height={160}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(57, 73, 171, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#3949ab" }
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
          {transports.length === 0 ? (
            <Text style={styles.emptyText}>Тээвэрлэлт байхгүй</Text>
          ) : (
            transports.map(tr => (
              <View key={tr.id} style={styles.transportCard}>
                <MaterialCommunityIcons name="truck-fast" size={24} color="#3949ab" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.transportRoute}>
                    {tr.from} → {tr.to} {tr.carSerial ? `| Серийн №: ${tr.carSerial}` : ""}
                  </Text>
                  <Text style={styles.transportDate}>{tr.date} | {tr.status}</Text>
                </View>
              </View>
            ))
          )}
        </View>

        {/* Start Transport Button */}
        {!activeTransport && (
          <TouchableOpacity style={styles.startBtn} onPress={handleStartTransport} activeOpacity={0.85}>
            <MaterialIcons name="play-arrow" size={26} color="#fff" />
            <Text style={styles.startBtnText}>Тээвэрлэлт эхлүүлэх</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Серийн дугаар оруулах modal */}
      <Modal visible={showModal} transparent animationType="slide">
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1, justifyContent: "center" }}
    keyboardVerticalOffset={0}
  >
    <View style={styles.modalBg}>
      <View style={styles.modalBox}>
        <LottieView
          source={require("../assets/animation/Animation - 1746898574646.json")}
          autoPlay
          loop
          style={{ width: 60, height: 60, marginBottom: 10 }}
        />
        <Text style={styles.modalTitle}>Машины серийн дугаар оруулах</Text>
        <TextInput
          style={[styles.modalInput, { width: 80, textAlign: "center" }]}
          placeholder="1234"
          value={serialNumberDigits}
          onChangeText={v => {
            if (/^[0-9]{0,4}$/.test(v)) {
              setSerialNumberDigits(v);
              if (v.length === 4) {
                lettersInputRef.current?.focus();
              }
            }
          }}
          keyboardType="number-pad"
          maxLength={4}
          autoFocus
        />
        <TextInput
          ref={lettersInputRef}
          style={[styles.modalInput, { width: 100, textAlign: "center" }]}
          placeholder="УКР"
          value={serialNumberLetters}
          onChangeText={v => setSerialNumberLetters(v.toUpperCase())}
          autoCapitalize="characters"
          maxLength={3}
          keyboardType="default"
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.modalBtn} onPress={handleAddTransport}>
          <Text style={styles.modalBtnText}>Оруулах</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(false)} style={{ marginTop: 10 }}>
          <Text style={{ color: "#3949ab", textAlign: "center" }}>Болих</Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>
</Modal>
    </>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    padding: 24,
    marginBottom: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  avatarCircle: {
    backgroundColor: "#3949ab",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3949ab",
    marginTop: 2,
    marginBottom: 2,
  },
  profileInfo: {
    fontSize: 15,
    color: "#555",
    marginTop: 1,
  },
  sectionBox: {
    backgroundColor: "#fff",
    borderRadius: 14,
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
    marginBottom: 10,
  },
  fineCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffeaea",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#d32f2f",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  fineReason: {
    color: "#d32f2f",
    fontWeight: "bold",
    fontSize: 15,
  },
  fineAmount: {
    color: "#d32f2f",
    fontSize: 15,
    marginTop: 2,
  },
  fineDate: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  progressBarBg: {
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 6,
    marginBottom: 12,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#3949ab",
    borderRadius: 6,
  },
  emptyText: {
    color: "#888",
    fontStyle: "italic",
    fontSize: 15,
    marginTop: 4,
  },
  transportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8eaf6",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#3949ab",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  transportRoute: {
    color: "#3949ab",
    fontWeight: "bold",
    fontSize: 15,
  },
  transportDate: {
    color: "#555",
    fontSize: 14,
    marginTop: 2,
  },
  startBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3949ab",
    borderRadius: 12,
    paddingVertical: 16,
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
    fontSize: 19,
    marginLeft: 10,
    letterSpacing: 1,
  },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3949ab",
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#c5cae9",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#f5f6fa",
  },
  modalBtn: {
    backgroundColor: "#3949ab",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  modalBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});