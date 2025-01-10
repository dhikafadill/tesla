import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, address } = route.params;

  const handlePayment = () => {
    // Logic untuk pembayaran
    alert('Pembelian Berhasil');
    navigation.navigate('Home', { successMessage: 'Pembayaran berhasil, Produk akan dikirimkan ke lokasi anda' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metode Pembayaran</Text>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/bca.jpg')} style={styles.paymentImage} />
        <Button title="Bank BCA" onPress={handlePayment} />
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/mandiri.png')} style={styles.paymentImage} />
        <Button title="Bank Mandiri" onPress={handlePayment} />
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/bni.jpg')} style={styles.paymentImage} />
        <Button title="Bank BNI" onPress={handlePayment} />
      </View>
      <View style={styles.paymentOption}>
        <Image source={require('../assets/crypto.jpg')} style={styles.paymentImage} />
        <Button title="Crypto" onPress={handlePayment} />
      </View>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
