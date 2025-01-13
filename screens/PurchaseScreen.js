import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/Background'; // **Mengimpor Background**

export default function PurchaseScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleNext = () => {
    navigation.navigate('Payment', { name, address });
  };

  return (
    <Background> {/* Menggunakan komponen Background */}
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
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
    marginBottom: 30,
    color: '#fff', // Teks putih
    textAlign: 'center', // Teks rata teng
  },
  input: {
    width: '100%',
    height: 60,
    padding: 15,
    color: '#fff', // Input teks putih
    backgroundColor: '#333', // Background input abu-abu gelap
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%', // Melebar penuh ke kanan dan kiri
    padding: 15, // Tinggi tombol
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',  // Menyusun teks di tengah vertikal
    alignItems: 'center',      // Menyusun teks di tengah horizontal
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Teks tombol tetap di tengah
  },
  backButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center', // Tombol "Kembali" tetap di tengah
    marginTop: 10, // Memberi jarak antara tombol "Kembali" dengan tombol pembayaran
  },
  buttonBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
