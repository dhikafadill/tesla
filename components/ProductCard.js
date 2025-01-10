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
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Lihat Detail" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    margin: 25,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: 220,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});
