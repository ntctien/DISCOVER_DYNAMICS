import { Divider } from "antd";
import ModalWrapper from "./ModalWrapper";
import getDurationString from "../../utils/getDurationString.js";
import numberWithDots from "../../utils/numberWithDots";
import tourStatus from "../../constants/tourStatus";
import getAddressString from "../../utils/getAddressString";

const BookingDetailModal = ({ open, onCancel, admin, data }) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel} title={"Chi tiết tour đặt"}>
      {/* Booking detail */}
      <div className="w-[65vw] h-[75vh] booking-detail font-medium px-[25px] py-[27px] items-center overflow-y-auto">
        <div className="flex gap-x-[9.4%]">
          {/* Booking info */}
          <div>
            <h3>Thông tin đặt tour</h3>
            <div className="flex flex-col gap-y-[25px] mt-[30px]">
              <p className="font-bold text-green">
                <span>Mã đặt tour: </span>
                {data?.id}
              </p>
              <p>
                <span>Họ tên khách hàng: </span>
                {data?.name}
              </p>
              <p>
                <span>SĐT: </span>
                {data?.phoneNumber}
              </p>
              <p>
                <span>Email: </span>
                {data?.email}
              </p>
              <p>
                <span>Địa chỉ: </span>
                {getAddressString(
                  data?.address,
                  data?.province,
                  data?.district,
                  data?.ward
                )}
              </p>
              <p>
                <span>Ghi chú: </span>
                {data?.note}
              </p>
            </div>
          </div>
          {/* Tour summarization */}
          <div className="flex-none flex flex-col justify-between">
            <div>
              <h3>Tóm tắt chuyến đi</h3>
              <p className="mt-[30px]">
                <span>Tour: </span>
                {data?.destinationInfo.location}
              </p>
              <div className="flex mt-[15px]">
                <div>
                  <p>
                    <span>Ngày đi: </span>
                    <br />
                    <br />
                    {data?.startDate}
                  </p>
                </div>
                <div className="w-[1px] bg-grey mx-[50px]" />
                <div>
                  <p>
                    <span>Ngày về: </span>
                    <br />
                    <br />
                    {data?.endDate}
                  </p>
                </div>
              </div>
              <p className="mt-5">
                <span>Thời gian: </span>
                {getDurationString(
                  data?.destinationInfo.dayDuration,
                  data?.destinationInfo.nightDuration
                )}
              </p>
              <p className="mt-[30px]">
                <span>Số lượng khách: </span>
                {data?.quantity} người
              </p>
            </div>
            <div className="row gap-x-[53px] text-green justify-self-end">
              <h4 className="text-22">Tổng cộng:</h4>
              <p className="font-semibold text-25">
                {numberWithDots(data?.total)} VNĐ
              </p>
            </div>
          </div>
        </div>
        <Divider className="border-black15 mt-6 mb-[27px]" />
        {/* Payment info */}
        <div className="flex flex-col items-center">
          <h3>Thông tin thanh toán</h3>
          {/* Status */}
          <p className="text-grey-darker mt-[15px]">
            Trạng thái:{" "}
            <span style={{ color: tourStatus[data?.status]?.color }}>
              {tourStatus[data?.status]?.title}
            </span>
          </p>
          {/* Payment image */}
          <div className="w-[360px] h-[360px] bg-grey rounded-10 mt-[15px] flex items-center justify-center">
            <p className="font-semibold text-[#676767]">Hình ảnh thanh toán</p>
          </div>
          {/* Admin buttons */}
          {admin && (
            <div className="row gap-x-5 mt-[17px]">
              <button className="w-[320px] h-[40px] primary-btn">
                Xác nhận thanh toán đầy đủ
              </button>
              <button className="w-[320px] h-[40px] secondary-btn">
                Yêu cầu kiểm tra lại
              </button>
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookingDetailModal;
