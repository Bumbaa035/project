import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const router = useRouter();

const fines = [
  {
    id: '1',
    title: 'Хурд хэтрүүлэлт',
    amount: '50,000₮',
    status: 'Төлөөгүй',
  },
  {
    id: '2',
    title: 'Гэрэл дохио зөрчсөн',
    amount: '30,000₮',
    status: 'Төлсөн',
  },
  {
    id: '3',
    title: 'Зогсоол буруу ашигласан',
    amount: '20,000₮',
    status: 'Төлөөгүй',
  },
];

export default function FineListPage() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={[styles.status, item.status === 'Төлсөн' ? styles.paid : styles.unpaid]}>
          {item.status}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, item.status === 'Төлсөн' && { backgroundColor: '#ccc' }]}
        disabled={item.status === 'Төлсөн'}
      >
        <Text style={styles.buttonText}>
          {item.status === 'Төлсөн' ? 'Төлөгдсөн' : 'Төлөх'}
        </Text>
        <MaterialIcons name="payment" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient colors={["#3949ab", "#6a1b9a"]} style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Торгуулийн жагсаалт</Text>
      <FlatList
        data={fines}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  amount: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  status: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  paid: {
    color: 'green',
  },
  unpaid: {
    color: 'red',
  },
  button: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
