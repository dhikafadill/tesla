import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../redux/productSlice';

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(selectProduct(product));
    navigation.navigate('Product Detail');
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.overlay} />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Lihat Detail" onPress={handlePress} color="#000" />
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    margin: 25,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Lapisan hitam semi-transparan
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -100,
    marginLeft: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    marginLeft: 20,
  },
});
