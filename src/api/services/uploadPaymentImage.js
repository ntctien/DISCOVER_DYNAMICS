import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../firebase'
import { doc, updateDoc } from "firebase/firestore";

const uploadPaymentImage = async ({ file, tourId, onDone }) => {
    if (!file) {
        alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/payment/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (err) => console.log(err),
        async () => {
            // download url
            await getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                await updateDoc(doc(db, 'bookedTour', tourId), {
                    paymentImage: url,
                    status: 1
                });
                onDone();
            });
        }
    );
}

export default uploadPaymentImage;