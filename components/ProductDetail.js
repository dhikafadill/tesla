import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { clearSelectedProduct } from '../redux/productSlice';
import { TouchableOpacity } from 'react-native';
import Background from '../components/Background'; // **Mengimpor Background**


export default function ProductDetail() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  if (!product) {
    return null;
  }

  const handlePurchase = () => {
    navigation.navigate('Purchase');
  };

  const handleBack = () => {
    dispatch(clearSelectedProduct());
    navigation.goBack();
  };

  return (
    <Background> {/* Menggunakan komponen Background */}
      <View style={styles.container}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePurchase}>
          <Text style={styles.buttonText}>Beli</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
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
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  price: {
    fontSize: 20,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 10,
    color: '#fff',
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
    width: '100%', // Melebar penuh ke kanan dan kiri
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
