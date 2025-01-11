import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PurchaseScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {
    navigation.navigate('Payment', { name, address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Pembeli</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        placeholderTextColor="#888" // Placeholder text menjadi abu-abu
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        placeholderTextColor="#888"
        value={address}
        onChangeText={setAddress}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Lanjutkan ke Pembayaran</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    color: '#fff', // Input teks putih
    backgroundColor: '#333', // Background input abu-abu gelap
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
