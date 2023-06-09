import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const bookTour = async ({ uid, tourId, quantity, total, name, phoneNumber, email, startDate, address, province, district, ward, note, endDate, createdAt }) => {
    try {
        await addDoc(collection(db, "bookedTour"), {
            uid, tourId, quantity, total, name, phoneNumber, email, startDate, address, province, district, ward, note, endDate, createdAt, status: 0
        });
        return { success: true }
    } catch (e) {
        return { success: false, error: e }
    }

}

export default bookTour;