import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { fetchDestinationsPending, fetchDestinationsSuccess } from "../../actions/destinations"

const fetchDestinations = async (dispatch) => {
    dispatch(fetchDestinationsPending());
    await getDocs(collection(db, "tour")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        dispatch(fetchDestinationsSuccess(newData));
    });
}

export default fetchDestinations;