import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {showLogin ? (
        <>
          {/* router.push("activeTransport") */}
          <LoginForm onLoggedIn={() => router.push("./dashboard")} />
          <TouchableOpacity onPress={() => setShowLogin(false)} style={styles.registerSwitchBtn}>
            <Text style={styles.switchText}>Шинээр бүртгүүлэх</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <RegisterForm onRegistered={() => setShowLogin(true)} />
          <TouchableOpacity onPress={() => setShowLogin(true)} style={styles.loginSwitchBtn}>
            <Text style={styles.switchText}>Өмнө бүртгүүлсэн бол нэвтрэх</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  registerSwitchBtn: {
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(57, 73, 171, 0.08)',
    borderRadius: 20,
  },
  loginSwitchBtn: {
    position: 'absolute',
    bottom: 48,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(57, 73, 171, 0.08)',
    borderRadius: 20,
  },
  switchText: {
    color: '#3949ab',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.3,
  },
}); 