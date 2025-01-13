import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Background from '../components/Background'; // **Mengimpor Background**

export default function PaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, address } = route.params;

  const handlePayment = (method) => {
    alert(`Pembayaran menggunakan ${method} berhasil!`);
    navigation.navigate('Home', {
      successMessage: `Pembayaran berhasil, Produk akan dikirimkan ke lokasi anda.`,
    });
  };

  return (
    <Background> {/* Menggunakan komponen Background */}
      <View style={styles.container}>
        <Text style={styles.title}>Metode Pembayaran</Text>

        {/* Bank BCA */}
        <TouchableOpacity
          style={[styles.paymentButton]}
          onPress={() => handlePayment('Bank BCA')}
        >
          <Image
            source={require('../assets/bca-logo-tranparent.png')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank BCA</Text>
        </TouchableOpacity>

        {/* Bank Mandiri */}
        <TouchableOpacity
          style={[styles.paymentButton]}
          onPress={() => handlePayment('Bank Mandiri')}
        >
          <Image
            source={require('../assets/mandiri-logo-tranparent.png')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank Mandiri</Text>
        </TouchableOpacity>

        {/* Bank BNI */}
        <TouchableOpacity
          style={[styles.paymentButton]}
          onPress={() => handlePayment('Bank BNI')}
        >
          <Image
            source={require('../assets/bni-logo-tranparent.png')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank BNI</Text>
        </TouchableOpacity>

        {/* Crypto */}
        <TouchableOpacity
          style={[styles.paymentButton]}
          onPress={() => handlePayment('Crypto')}
        >
          <Image
            source={require('../assets/btc-a-logo-tranparent.png')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Crypto</Text>
        </TouchableOpacity>

        {/* Tombol Kembali */}
        <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonBackText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  paymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Tombol "Kembali" tetap di tengah
    marginTop: 30, // Memberi jarak antara tombol "Kembali" dengan tombol pembayaran
  },
  buttonBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 30, // Memberi jarak antara gambar dan teks
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left', // Teks tombol pembayaran menempel ke kiri
  },
});
