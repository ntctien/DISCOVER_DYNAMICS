import { Upload } from "antd";
import ModalWrapper from "../modals/ModalWrapper";
import imageIcon from "../../assets/image.svg";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  showUploadList: false,
};

const PaymentModal = ({ open, onCancel }) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel} title="Thanh toán tour">
      <div className="px-5 py-[10px] flex flex-col items-center">
        <Dragger {...props}>
          <div className="flex flex-col items-center justify-center text-[#676767] text-center">
            <img src={imageIcon} alt="Invoice" />
            <h2 className="font-semibold text-20 mt-[6px] w-[275px]">
              Thêm hình ảnh hóa đơn thanh toán
            </h2>
            <p className="text-12 mt-[5px]">Hoặc kéo và thả</p>
          </div>
        </Dragger>
        <div className="flex gap-x-5 mt-[15px]">
          <button
            onClick={onCancel}
            className="w-[160px] h-[40px] rounded-10 font-medium border-1 border-black"
          >
            HỦY
          </button>
          <button
            className="w-[160px] h-[40px] rounded-10 font-medium bg-orange text-white hover:brightness-110"
          >
            XÁC NHẬN
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PaymentModal;
