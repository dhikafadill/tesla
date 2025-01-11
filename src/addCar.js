import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

async function saveCar() {
  try {
    await addDoc(collection(db, "cars"), {
      id: "1",
      name: "Tesla Model S",
      price: "79999",
      description: "Mobil listrik dengan performa tinggi",
    });
    console.log("Data berhasil disimpan!");
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}

saveCar();
