import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import PurchaseScreen from '../screens/PurchaseScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TOKO TESLA" 
        component={HomeScreen} 
        options={{
          headerRight: () => (
            <Button 
              title="Login" 
              onPress={() => navigation.navigate('Login')} // Navigasi ke halaman Login
              color="#007AFF" // Warna tombol (opsional)
            />
          ),
        }}
      />
      <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
      <Stack.Screen name="Purchase" component={PurchaseScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
