import { useContext } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { ModalContext } from "../contexts/ModalContext";

const useBookTour = () => {
  const navigate = useNavigate();
  const { setCurrentModal } = useContext(ModalContext);
  
  const handleBookTour = (destinationId) => {
    if (auth.currentUser) {
      navigate(`/book-tour/${destinationId}`);
    } else {
      setCurrentModal("sign-in");
    }
  };
  return handleBookTour;
};

export default useBookTour;
