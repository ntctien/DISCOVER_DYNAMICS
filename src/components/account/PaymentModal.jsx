import { useEffect, useState } from "react";
import { Spin, Upload, message } from "antd";
import ModalWrapper from "../modals/ModalWrapper";
import imageIcon from "../../assets/image.svg";
import uploadPaymentImage from "../../api/services/uploadPaymentImage";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  showUploadList: false,
  accept: "image/*",
  action: null,
  beforeUpload: () => false,
  className: "overflow-hidden w-[450px]",
};

const PaymentModal = ({ open, onCancel, tourId, fetchData }) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!file) setImage(null);
  }, [file]);

  const handleChange = ({ file }) => {
    setFile(file);
    setImage(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    onCancel();
    setFile(null);
  };

  const onUpdateImageDone = () => {
    setLoading(false);
    handleCancel();
    message.success("Cập nhật hình ảnh thanh toán thành công!");
    fetchData();
  };

  const handleConfirm = async () => {
    setLoading(true);
    uploadPaymentImage({ file, tourId, onDone: onUpdateImageDone });
  };

  return (
    <ModalWrapper title="Thanh toán tour" open={open} onCancel={handleCancel}>
      <Spin spinning={loading}>
        <div className="px-5 py-[10px] flex flex-col items-center">
          <Dragger {...props} onChange={handleChange}>
            {image ? (
              <img
                src={image}
                alt="Payment"
                className="w-full aspect-square object-contain object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#676767] text-center aspect-square">
                <img src={imageIcon} alt="Invoice" />
                <h2 className="font-semibold text-20 mt-[6px] w-[275px]">
                  Thêm hình ảnh hóa đơn thanh toán
                </h2>
                <p className="text-12 mt-[5px]">Hoặc kéo và thả</p>
              </div>
            )}
          </Dragger>
          <div className="flex gap-x-5 mt-[15px]">
            <button
              onClick={onCancel}
              className="w-[160px] h-[40px] rounded-10 font-medium border-1 border-black"
            >
              HỦY
            </button>
            <button
              onClick={handleConfirm}
              className="w-[160px] h-[40px] rounded-10 font-medium bg-orange text-white hover:brightness-110"
            >
              XÁC NHẬN
            </button>
          </div>
        </div>
      </Spin>
    </ModalWrapper>
  );
};

export default PaymentModal;
