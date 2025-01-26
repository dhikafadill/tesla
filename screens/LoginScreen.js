import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { db } from '../firebase'; // Firebase setup import
import { collection, getDocs, query, where } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../components/Background';
import teslaLogo from '../assets/tesla-motors-logo-light.png';
import teslatxt from '../assets/tesla-motors-text-light.png';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email), where('password', '==', password));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // User found, save user session in AsyncStorage (or use Firestore session if preferred)
        await AsyncStorage.setItem('userSession', JSON.stringify(email)); // Save user data for session
        navigation.replace('Home'); // Navigate to Home after login
      } else {
        setError('Invalid email or password'); // Show error message if no user is found
      }
    } catch (error) {
      setError('Login failed: ' + error.message); // Show error message if login fails
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navigate to RegisterScreen
  };

  return (
    <Background>
    <View style={styles.container}>
        <Image source={teslaLogo} style={styles.logo} />
                <Image source={teslatxt} style={styles.txt} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
    <Text style={styles.loginButtonText}>Login</Text>
  </TouchableOpacity>

  {/* Register Button */}
  <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
    <Text style={styles.registerButtonText}>Register</Text>
  </TouchableOpacity>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        width: '100%', // Full width input
        height: 60, // Adjusted height for consistency
        padding: 15, // Padding inside the input
        color: '#fff', // White text color
        backgroundColor: '#333', // Dark gray background for the input
        borderRadius: 10, // Rounded corners
        marginBottom: 10, // Spacing between inputs
      },
      error: {
        color: 'red',
        marginBottom: 12,
      },
      loginButton: {
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 12,
        borderRadius: 10,
        marginTop: 10,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      registerButton: {
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
      },
      registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
        aspectRatio: 1,
       marginTop: -150,
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
});

export default LoginScreen;
