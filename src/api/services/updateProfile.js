import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const updateProfile = async ({ uid, name, phone, email, address, province, district, ward }) => {
    await updateDoc(doc(db, 'user', uid), { name, phone, email, address, province, district, ward });
}

export default updateProfile;