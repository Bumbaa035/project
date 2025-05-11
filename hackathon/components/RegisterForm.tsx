import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Button, Alert, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface RegisterFormProps {
  onRegistered?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegistered }) => {
  const [form, setForm] = useState({
    phone: "",
    lastName: "",
    firstName: "",
    registerNumber: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    if (form.password.length !== 4 || !/^[0-9]{4}$/.test(form.password)) {
      setError("Нууц үг 4 оронтой тоо байх ёстой!");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        Alert.alert("Амжилттай", "Бүртгэл амжилттай!");
        if (onRegistered) onRegistered();
      } else {
        setError("Бүртгэлд алдаа гарлаа!");
      }
    } catch (e) {
      setError("Сүлжээний алдаа!");
    }
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <View style={styles.container}>
          <View style={styles.formBox}>
            <Text style={styles.title}>Бүртгүүлэх</Text>
            <Text style={styles.label}>Утас</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="phone" size={22} color="#3949ab" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="Утас" keyboardType="phone-pad" onChangeText={v => handleChange("phone", v)} value={form.phone} placeholderTextColor="#aaa" />
            </View>
            <Text style={styles.label}>Овог</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="person" size={22} color="#3949ab" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="Овог" onChangeText={v => handleChange("lastName", v)} value={form.lastName} placeholderTextColor="#aaa" />
            </View>
            <Text style={styles.label}>Нэр</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="person-outline" size={22} color="#3949ab" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="Нэр" onChangeText={v => handleChange("firstName", v)} value={form.firstName} placeholderTextColor="#aaa" />
            </View>
            <Text style={styles.label}>Регистр</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="badge" size={22} color="#3949ab" style={styles.inputIcon} />
              <TextInput style={styles.input} placeholder="Регистр" onChangeText={v => handleChange("registerNumber", v)} value={form.registerNumber} placeholderTextColor="#aaa" />
            </View>
            <Text style={styles.label}>4 оронтой нууц үг (PIN)</Text>
            <Text style={styles.pinInfo}>
              Энэ нууц үгийг цаашид бүртгэлдээ нэвтрэх бүрдээ ашиглана. Зөвхөн 4 оронтой тоо оруулна уу. (Жишээ: <Text style={{fontWeight:'bold'}}>1234</Text>)
            </Text>
            <View style={[
              styles.inputWrapper,
              error && error.includes('нууц үг') ? styles.inputWrapperError : null
            ]}>
              <MaterialIcons name="lock" size={22} color="#3949ab" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="4 оронтой нууц үг"
                secureTextEntry={!showPassword}
                onChangeText={v => handleChange("password", v)}
                value={form.password}
                placeholderTextColor="#aaa"
                keyboardType="number-pad"
                maxLength={4}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={22} color="#aaa" />
              </TouchableOpacity>
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Бүртгүүлэх</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  formBox: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 28,
    width: 340,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3949ab',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
    marginTop: 12,
    marginLeft: 2,
  },
  pinInfo: {
    color: '#666',
    fontSize: 13,
    marginBottom: 2,
    marginLeft: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c5cae9',
    borderRadius: 10,
    backgroundColor: '#f5f6fa',
    marginBottom: 2,
    paddingHorizontal: 8,
    marginTop: 2,
  },
  inputWrapperError: {
    borderColor: '#d32f2f',
  },
  inputIcon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#222',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#3949ab',
    borderRadius: 10,
    marginTop: 22,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#3949ab',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  error: {
    color: '#d32f2f',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default RegisterForm; 