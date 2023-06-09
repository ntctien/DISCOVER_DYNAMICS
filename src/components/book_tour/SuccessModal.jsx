import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import successIcon from "../../assets/success.svg";

const SuccessModal = ({ open, onCancel, email }) => {
  const navigate = useNavigate();

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className="flex flex-col items-center text-center text-18 text-black">
        <img src={successIcon} alt="Success" />
        <h2 className="font-bold text-25 mt-5">Đặt tour thành công!</h2>
        <p className="mt-[15px]">
          Đơn xác nhận đặt tour đã được gửi tới email của bạn tại địa chỉ:
          {" "+ email ?? "example@gmail.com"}
        </p>
        <p>Vui lòng xác nhận và thanh toán đúng thời hạn.</p>
        <br />
        <p>Cảm ơn bạn vì đã chọn chúng tôi!</p>
        <br />
        <button
          onClick={() => navigate("/account")}
          className="bg-orange success-btn text-white mt-[3px] hover:brightness-110"
        >
          Xem chuyến đi của bạn
        </button>
        <button
          onClick={() => navigate("/")}
          className="success-btn border-1 border-black47 mt-[5px]"
        >
          {"<< Quay về trang chủ"}
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
