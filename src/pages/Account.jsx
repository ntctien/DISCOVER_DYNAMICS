import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Profile from "../components/account/Profile";
import BookingHistory from "../components/account/BookingHistory";
import { ModalContext } from "../contexts/ModalContext";

const Account = () => {
  const { setCurrentModal } = useContext(ModalContext);
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setCurrentModal("sign-in");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-start gap-x-[60px] pt-[10px] pb-[34px] px-[80px]">
      {/* Profile */}
      <Profile user={user} />
      {/* Booking history */}
      <BookingHistory />
    </div>
  );
};

export default Account;
