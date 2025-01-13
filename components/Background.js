// components/Background.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://api.starlink.com/public-files/home_illustriation1_d.jpg' }} // Gantilah dengan URL gambar Anda
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
  },
});

export default Background;