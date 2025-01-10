// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAm77pcFshOGTXaulmmNR5eVoBvPJ9S-So",
    authDomain: "toko-tesla.firebaseapp.com",
    databaseURL: "https://toko-tesla-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "toko-tesla",
    storageBucket: "toko-tesla.firebasestorage.app",
    messagingSenderId: "996956696581",
    appId: "1:996956696581:web:9ca18cef8a88f034c0ec6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };