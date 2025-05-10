import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
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
        
<LoginForm onLoggedIn={() => router.push("./dashboard")} />
<TouchableOpacity onPress={() => setShowLogin(false)} style={styles.switchBtn}>
            <Text style={styles.switchText}>Шинээр бүртгүүлэх</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <RegisterForm onRegistered={() => setShowLogin(true)} />
          <TouchableOpacity onPress={() => setShowLogin(true)} style={styles.switchBtn}>
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
  switchBtn: {
    marginTop: 8,
    alignSelf: 'center',
    padding: 8,
  },
  switchText: {
    color: '#3949ab',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
}); 