import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import teslaLogo from '../assets/tesla-motors-logo-light.png';
import teslatxt from '../assets/tesla-motors-text-light.png';
import Background from '../components/Background'; // Import Background component
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Fetch products from Firestore
  const fetchProducts = async () => {
    try {
      const productsRef = collection(db, 'products');
      const productsQuery = query(productsRef, orderBy('id', 'asc')); // Sort products by ID in ascending order
      const querySnapshot = await getDocs(productsQuery);

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Fetched product data:', productList);
      setProducts(productList);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle logout logic
  const handleLogout = async () => {
    try {
      console.log('Logging out...');
      // Remove session from AsyncStorage
      await AsyncStorage.removeItem('userSession');
      // Navigate to Login screen after logout
      console.log('Navigating to Login');
      navigation.replace('Login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <Background>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon name="logout" size={30} color="#fff" /> {/* Icon logout */}
        </TouchableOpacity>
        <Image source={teslaLogo} style={styles.logo} />
        <Image source={teslatxt} style={styles.txt} />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'justify',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  logoutButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#333', // Background for logout icon
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30, // Position the button at the top-left corner
    left: 20, // Adjusted to position it on the left
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
