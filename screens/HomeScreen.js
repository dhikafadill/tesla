import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import teslaLogo from '../assets/tesla-motors-logo-light.png';
import teslatxt from '../assets/tesla-motors-text-light.png';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data dari Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products')); // Koleksi 'products'
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList); // Menyimpan data ke state
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Ambil data saat komponen pertama kali dimuat
  }, []);

  // Jika masih loading, tampilkan spinner
  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={teslaLogo} style={styles.logo} />
      <Image source={teslatxt} style={styles.txt} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false} // Hilangkan scrollbar vertikal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    aspectRatio: 1,
    marginVertical: 0,
  },
  txt: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    aspectRatio: 1,
    marginVertical: -70,
    marginBottom: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
