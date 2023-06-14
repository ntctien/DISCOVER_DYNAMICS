import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "bookedTour"));
    return querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));
};

export default getData;