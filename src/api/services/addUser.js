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
        console.log("Document written with ID: ", docRef.id);
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};

export default addUser