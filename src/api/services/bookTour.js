import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const bookTour = async ({ uid, tourId, name, phoneNumber, email, startDate, address, province, district, ward, note }) => {
    try {
        await addDoc(collection(db, "bookedTour"), {
            uid, tourId, name, phoneNumber, email, startDate, address, province, district, ward, note
        });
        return { success: true }
    } catch (e) {
        return { success: false, error: e }
    }

}

export default bookTour;