import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, address } = route.params;

  const handlePayment = () => {
    alert('Pembelian Berhasil');
    navigation.navigate('Home', { successMessage: 'Pembayaran berhasil, Produk akan dikirimkan ke lokasi anda' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metode Pembayaran</Text>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/bca.jpg')} style={styles.paymentImage} />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Bank BCA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/mandiri.png')} style={styles.paymentImage} />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Bank Mandiri</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/bni.jpg')} style={styles.paymentImage} />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Bank BNI</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/crypto.jpg')} style={styles.paymentImage} />
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Crypto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Background hitam
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Teks putih
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  button: {
    width: '100%', // Melebar penuh ke kanan dan kiri
    padding: 15, // Tinggi tombol
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
    justifyContent: 'center',  // Menyusun teks di tengah vertikal
    alignItems: 'center',      // Menyusun teks di tengah horizontal
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Teks tombol tetap di tengah
  },
});
