import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const fetchProfile = async (uid) => {
    const d = await getDoc(doc(db, "user", uid));
    return d.data();
}

export default fetchProfile;