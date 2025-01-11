import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function fetchCars() {
  const querySnapshot = await getDocs(collection(db, "cars"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}

fetchCars();
