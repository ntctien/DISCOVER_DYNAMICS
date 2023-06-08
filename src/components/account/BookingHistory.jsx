import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import WarningModal from "../modals/WarningModal";
import PaymentModal from "./PaymentModal";
import BookingDetailModal from "../modals/BookingDetailModal";
import getBookingHistory from "../../api/services/getBookingHistory";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import getDestinationById from "../../api/services/getDestinationById";
import timeStampToString from "../../utils/timeStampToString";
import updateTourStatus from "../../api/services/updateTourStatus";

const BookingHistory = () => {
  const [modal, setModal] = useState(null);
  const [data, setData] = useState([]);
  const [currItem, setCurrItem] = useState(null);

  const fetchData = async () => {
    let result = await getBookingHistory(auth.currentUser.uid);
    result = await Promise.all(
      result.map(async (item) => {
        const destinationInfo = await getDestinationById(item.tourId);
        return {
          ...item,
          destinationInfo,
          startDate: timeStampToString(item.startDate),
          endDate: timeStampToString(item.endDate),
        };
      })
    );
    setData([...result]);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        fetchData();
      }
    });
  }, []);

  const handleItemClick = (item) => {
    setModal("detail");
    setCurrItem(item);
  };

  const handleCancelTour = async () => {
    await updateTourStatus(currItem.id,3);
    setModal(null);
    fetchData();
  };

  return (
    <div className="w-[62.5%] mt-[9px] flex flex-col items-center">
      <h2 className="font-semibold text-32 w-full">Lịch sử đặt tour</h2>
      <div className="flex flex-col gap-y-5 mt-[25px]">
        {data.map((item, i) => (
          <BookItem
            key={i}
            item={item}
            setModal={setModal}
            setCurrItem={setCurrItem}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      <button className="mt-[35px] font-medium hover:text-green">
        Xem thêm...
      </button>
      <WarningModal
        title={
          <p className="font-medium text-24 text-center">
            Bạn chắc chắn muốn hủy tour{" "}
            <span className="font-semibold text-green">
              {currItem?.destinationInfo.location}
            </span>
            , mã <span className="font-semibold text-green">{currItem?.id}</span>{" "}
            không?{" "}
          </p>
        }
        open={modal === "cancel"}
        onCancel={() => setModal(null)}
        onOk={handleCancelTour}
      />
      <PaymentModal open={modal === "pay"} onCancel={() => setModal(null)} />
      <BookingDetailModal
        open={modal === "detail"}
        onCancel={() => setModal(null)}
        data={currItem}
      />
    </div>
  );
};

export default BookingHistory;
