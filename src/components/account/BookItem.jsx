import React from "react";
import { Dropdown } from "antd";
import { locationIcon } from "../../assets/search_icons";
import tourStatus from "../../constants/tourStatus";
import editIcon from "../../assets/edit.svg";

const editOptions = [
  { key: "pay", label: "Thanh toán" },
  { key: "cancel", label: "Hủy tour", danger: true },
];

const BookItem = ({ item, setModal, onClick }) => {
  const handleOptionClick = ({ key }) => {
    setModal(key);
  };

  return (
    <div
      onClick={onClick}
      className="font-medium bg-white rounded-10 border-1 border-grey-darker p-5 relative cursor-pointer"
    >
      <div className="flex justify-between text-grey-darker">
        <div>
          <p>
            Mã đặt tour: <span className="font-bold text-green">{item.id}</span>
          </p>
          <p className="mt-[15px]">
            Họ tên khách hàng: <span className="text-black">{item.name}</span>
          </p>
        </div>
        <div>
          <p>
            Trạng thái:{" "}
            <span style={{ color: tourStatus[item.status].color }}>
              {tourStatus[item.status].title}
            </span>
          </p>
          <p className="mt-[15px]">
            SĐT: <span className="text-black">{item.phoneNumber}</span>
          </p>
        </div>
      </div>
      <div className="flex gap-x-5 mt-[22px]">
        <img
          src={item.image}
          alt="Tour"
          className="w-[32%] aspect-[4/3] rounded-10 object-cover object-center"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between">
            {/* Tour name */}
            <div className="book-tour-info-container">
              <h3>Tour của bạn</h3>
              <div className="book-tour-info">
                <p>{item.location}</p>
                <img src={locationIcon} alt="Location" />
              </div>
            </div>
            {/* Duration */}
            <div className="book-tour-info-container">
              <h3>Ngày đi</h3>
              <div className="book-tour-info">
                <p>{item.startDate}</p>
              </div>
            </div>
            {/* Expense */}
            <div className="book-tour-info-container">
              <h3>Ngày về</h3>
              <p>{item.startDate}</p>
            </div>
          </div>
          <p>
            <span className="text-grey-darker">Số lượng khách: </span>
            {item.quantity}
          </p>
          <p className="text-grey-darker">
            Tổng cộng:{" "}
            <span className="font-bold text-24 text-green">{item.total}</span>
          </p>
        </div>
      </div>
      {/* Edit button */}
      <Dropdown
        menu={{ items: editOptions, onClick: handleOptionClick }}
        placement="top"
        arrow
      >
        <button onClick={(e)=>e.stopPropagation()} className="absolute bottom-5 right-5">
          <img src={editIcon} alt="Edit" />
        </button>
      </Dropdown>
    </div>
  );
};

export default BookItem;
