import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase";

const addUser = async (email, uid) => {

  await setDoc(doc(db, "user", uid), {
    address: null,
    district: null,
    email: email,
    name: null,
    phone: null,
    province: null,
    role: "customer",
    ward: null,        
  });
  
};

export default addUser