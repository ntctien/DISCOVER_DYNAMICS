import React from "react";
import ModalWrapper from "./ModalWrapper";

const BookingDetailModal = ({ open, onCancel }) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel} title={"Chi tiết tour đặt"}>
      <div className="w-[960px] booking-detail flex font-medium px-[25px] py-[27px]">
        {/* Booking info */}
        <div>
            <h3>Thông tin đặt tour</h3>
            <div className="flex flex-col gap-y-[25px] mt-[30px]">
                <p className="font-bold text-green"><span>Mã đặt tour: </span>LQNSU346JK</p>
                <p><span>Họ tên khách hàng: </span>Phạm Thị Thu Trang</p>
                <p><span>SĐT: </span>09xx xxx xxx</p>
                <p><span>Email: </span>example@email.com</p>
                <p><span>Địa chỉ: </span>ĐH CNTT, phường Linh Trung, thành phố Thủ Đức, TPHCM</p>
                <p><span>Ghi chú: </span>Tôi ăn chay</p>
            </div>
        </div>
        {/* Tour summarization */}
        <div>
            <h3>Tóm tắt chuyến đi</h3>
            <p className="mt-[30px]"><span>Tour: </span>Cao Bằng</p>
            <div className="flex justify-between">
                <div>
                    <p><span>Ngày đi: </span><br/>11/04/2023</p>
                </div>
            </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookingDetailModal;
