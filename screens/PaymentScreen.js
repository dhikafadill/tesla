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
          style={[styles.paymentButton, styles.marginHorizontal]}
          onPress={() => handlePayment('Bank BCA')}
        >
          <Image
            source={require('../assets/bca.jpg')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank BCA</Text>
        </TouchableOpacity>

        {/* Bank Mandiri */}
        <TouchableOpacity
          style={[styles.paymentButton, styles.marginHorizontal]}
          onPress={() => handlePayment('Bank Mandiri')}
        >
          <Image
            source={require('../assets/mandiri.png')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank Mandiri</Text>
        </TouchableOpacity>

        {/* Bank BNI */}
        <TouchableOpacity
          style={[styles.paymentButton, styles.marginHorizontal]}
          onPress={() => handlePayment('Bank BNI')}
        >
          <Image
            source={require('../assets/bni.jpg')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Bank BNI</Text>
        </TouchableOpacity>

        {/* Crypto */}
        <TouchableOpacity
          style={[styles.paymentButton, styles.marginHorizontal]}
          onPress={() => handlePayment('Crypto')}
        >
          <Image
            source={require('../assets/crypto.jpg')}
            style={styles.paymentImage}
          />
          <Text style={styles.buttonText}>Crypto</Text>
        </TouchableOpacity>

        {/* Tombol Kembali */}
        <TouchableOpacity
          style={[styles.backButton, styles.marginHorizontal]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Kembali</Text>
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
  },
  paymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Tombol "Kembali" tetap di tengah
  },
  paymentImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10, // Memberi jarak antara gambar dan teks
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left', // Teks tombol pembayaran menempel ke kiri
  },
  marginHorizontal: {
    marginHorizontal: 20, // Menjaga margin kanan dan kiri tetap sejajar
  },
});
