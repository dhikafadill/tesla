import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Lanjutkan ke Pembayaran" onPress={handleNext} color="#000"/>
      <Button title="Kembali" onPress={() => navigation.goBack()} color="#000" />
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
