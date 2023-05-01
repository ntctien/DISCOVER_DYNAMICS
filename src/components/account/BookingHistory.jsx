import { useState } from "react";
import BookItem from "./BookItem";
import WarningModal from "../modals/WarningModal";
import PaymentModal from "./PaymentModal";

const data = [
  {
    id: "LQNSU346JK",
    status: 0,
    name: "Phạm Thị Thu Trang",
    phoneNumber: "09xx xxx xxx",
    location: "Cao Bằng",
    startDate: "11/04/2023",
    endDate: "16/04/2023",
    quantity: 1,
    total: "6.600.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  },
  {
    id: "LQNSU346JK",
    status: 2,
    name: "Phạm Thị Thu Trang",
    phoneNumber: "09xx xxx xxx",
    location: "Cao Bằng",
    startDate: "11/04/2023",
    endDate: "16/04/2023",
    quantity: 1,
    total: "6.600.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  },
  {
    id: "LQNSU346JK",
    status: 3,
    name: "Phạm Thị Thu Trang",
    phoneNumber: "09xx xxx xxx",
    location: "Cao Bằng",
    startDate: "11/04/2023",
    endDate: "16/04/2023",
    quantity: 1,
    total: "6.600.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  },
  {
    id: "LQNSU346JK",
    status: 1,
    name: "Phạm Thị Thu Trang",
    phoneNumber: "09xx xxx xxx",
    location: "Cao Bằng",
    startDate: "11/04/2023",
    endDate: "16/04/2023",
    quantity: 1,
    total: "6.600.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  },
  {
    id: "LQNSU346JK",
    status: 0,
    name: "Phạm Thị Thu Trang",
    phoneNumber: "09xx xxx xxx",
    location: "Cao Bằng",
    startDate: "11/04/2023",
    endDate: "16/04/2023",
    quantity: 1,
    total: "6.600.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  },
];

const BookingHistory = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="w-[62.5%] mt-[9px] flex flex-col items-center">
      <h2 className="font-semibold text-32 w-full">Lịch sử đặt tour</h2>
      <div className="flex flex-col gap-y-5 mt-[25px]">
        {data.map((item, i) => (
          <BookItem key={i} item={item} setModal={setModal} />
        ))}
      </div>
      <button className="mt-[35px] font-medium hover:text-green">
        Xem thêm...
      </button>
      <WarningModal
        title={
          <p className="font-medium text-24 text-center">
            Bạn chắc chắn muốn hủy tour{" "}
            <span className="font-semibold text-green">Cao Bằng</span>, mã{" "}
            <span className="font-semibold text-green">LQNSU346JK</span> không?{" "}
          </p>
        }
        open={modal === "cancel"}
        onCancel={() => setModal(null)}
      />
      <PaymentModal open={modal === "pay"} onCancel={() => setModal(null)} />
    </div>
  );
};

export default BookingHistory;
