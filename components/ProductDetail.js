import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { clearSelectedProduct } from '../redux/productSlice';

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
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Beli" onPress={handlePurchase} color="#000"/>
      <Button title="Kembali" onPress={handleBack} color="#000"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  price: {
    fontSize: 20,
    color: '#888',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});
