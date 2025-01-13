import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import teslaLogo from '../assets/tesla-motors-logo-light.png';
import teslatxt from '../assets/tesla-motors-text-light.png';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const productsRef = collection(db, 'products');
      const productsQuery = query(productsRef, orderBy('id', 'asc')); // Sorting numerik berdasarkan ID
      const querySnapshot = await getDocs(productsQuery);

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Data produk yang diambil:', productList);
      setProducts(productList);
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        keyExtractor={(item) => item.id.toString()} // Pastikan ID diubah ke string
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
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
