import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import teslaLogo from '../assets/tesla-motors-logo-light.png';
import teslatxt from '../assets/tesla-motors-text-light.png';

const products = [
  {
    id: '1',
    name: 'Tesla Model S',
    price: '79999',
    description: 'Mobil listrik dengan performa tinggi. Tesla Model S adalah sedan listrik liftback lima pintu, diproduksi oleh Tesla, Inc. dan diperkenalkan pada 22 Juni 2012. Pada 23 April 2019, Model S Long Range memiliki jangkauan EPA 373 mil (600 km), yang lebih jauh dari mobil listrik baterai lainnya.',
    image: require('../assets/model-s.jpg'),
  },
  {
    id: '2',
    name: 'Tesla Model 3',
    price: '39999',
    description: 'Mobil listrik dengan harga terjangkau. Tesla Model 3 adalah mobil listrik empat pintu yang dikembangkan oleh Tesla.[7] Versi Model 3 Standard Range Plus memberikan jangkauan listrik dengan rating EPA 250 mil (402 km) dan versi Jarak Jauh menghasilkan 322 mil (518 km).[8] Model 3 dilengkapi perangkat keras tanpa pengemudi, dengan pembaruan perangkat lunak berkala yang menambahkan fungsionalitas.',
    image: require('../assets/model-3.jpg'),
  },
  {
    id: '3',
    name: 'Tesla Cybertruck',
    price: '69999',
    description: 'Truk listrik futuristik dengan performa tinggi. Tesla Cybertruck adalah model truk ringan berdaya baterai dan bertenaga listrik yang diumumkan oleh Tesla, Inc. Tiga model telah diumumkan, dengan perkiraan jangkauan EPA 400–800 kilometer (250–500 mi) dan perkiraan 0–100 km/h (0–62 mph) dalam waktu 2,9–6,5 detik, tergantung modelnya.',
    image: require('../assets/cybertruck.jpeg'),
  },
  {
    id: '4',
    name: 'Tesla Model X',
    price: '89999',
    description: 'SUV listrik dengan pintu Falcon Wing. Tesla Model X adalah SUV crossover mewah ukuran sedang bertenaga baterai dan bertenaga listrik yang diproduksi oleh Tesla, Inc. sejak tahun 2015. Dikembangkan dari platform sedan ukuran penuh Tesla Model S , kendaraan ini secara khusus menggunakan pintu sayap elang untuk akses penumpang.',
    image: require('../assets/model-x.jpg'),
  },
  {
    id: '5',
    name: 'Tesla Model Y',
    price: '49999',
    description: 'SUV listrik yang lebih kecil dan terjangkau. Tesla Model Y adalah SUV crossover ukuran sedang bertenaga baterai dan bertenaga listrik yang diproduksi oleh Tesla, Inc. sejak tahun 2020. Kendaraan ini diluncurkan pada bulan Maret 2019 sebagai model produksi kelima perusahaan tersebut sejak diluncurkan setelah Roadster , Model S , Model X , dan Model 3.',
    image: require('../assets/model-y.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={teslaLogo} style={styles.logo} />
      <Image source={teslatxt} style={styles.txt} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    marginBottom: 10,
    color: '#000',
  },
});
