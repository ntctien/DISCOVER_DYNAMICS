import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../firebase";

const addUser = async (email) => {

    try {
        const docRef = await addDoc(collection(db, "user"), {
            address: null,
            district: null,
            email: email,
            name: null,
            phone: null,
            province: null,
            role: "customer",
            ward: null,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};