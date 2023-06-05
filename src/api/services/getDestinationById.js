import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const getDestinationById = async (id) => {
    const d = await getDoc(doc(db, "tour", id));
    return d.data();
}

export default getDestinationById;