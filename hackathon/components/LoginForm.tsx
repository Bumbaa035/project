import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginFormProps {
  onLoggedIn?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoggedIn }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load saved phone number when component mounts
    loadSavedPhone();
  }, []);

  const loadSavedPhone = async () => {
    try {
      const savedPhone = await AsyncStorage.getItem("userPhone");
      if (savedPhone) {
        setPhone(savedPhone);
      }
    } catch (e) {
      console.error("Error loading saved phone:", e);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    if (password.length !== 4 || !/^[0-9]{4}$/.test(password)) {
      setError("Нууц үг 4 оронтой тоо байх ёстой!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://210.109.53.233:3300/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save phone number for future logins
        await AsyncStorage.setItem("userPhone", phone);
        // Save token for authenticated requests
        await AsyncStorage.setItem("userToken", data.token);
        Alert.alert("Амжилттай", "Нэвтэрлээ!");
        if (onLoggedIn) onLoggedIn();
      } else {
        setError(data.message || "Нэвтрэхэд алдаа гарлаа!");
      }
    } catch (e) {
      setError("Сүлжээний алдаа!");
      console.error("Login error:", e);
    }
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.formBox}>
          <Text style={styles.title}>Нэвтрэх</Text>

          <Text style={styles.label}>Утасны дугаар</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="phone"
              size={22}
              color="#3949ab"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Утасны дугаар"
              value={phone}
              onChangeText={setPhone}
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.label}>4 оронтой нууц үг</Text>
          <View style={styles.inputWrapper}>
            <MaterialIcons
              name="lock"
              size={22}
              color="#3949ab"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="4 оронтой нууц үг"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
              maxLength={4}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={22}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Нэвтрэх</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  formBox: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    width: 340,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3949ab",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
    marginTop: 12,
    marginLeft: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c5cae9",
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    marginBottom: 2,
    paddingHorizontal: 8,
    marginTop: 2,
  },
  inputIcon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#3949ab",
    borderRadius: 10,
    marginTop: 22,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#3949ab",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  error: {
    color: "#d32f2f",
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
  },
});

export default LoginForm;
