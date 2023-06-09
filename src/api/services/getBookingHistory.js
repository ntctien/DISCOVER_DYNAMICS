import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from '../../firebase';

const getBookingHistory = async (uid) => {
    const querySnapshot = await getDocs(query(collection(db, "bookedTour"), where("uid", "==", uid), orderBy("createdAt", "desc")));
    return querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
}

export default getBookingHistory;