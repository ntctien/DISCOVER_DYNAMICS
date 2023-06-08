import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const updateTourStatus = async (tourId, statusId) => {
    await updateDoc(doc(db, 'bookedTour', tourId), {
        status: statusId
    });
}

export default updateTourStatus;