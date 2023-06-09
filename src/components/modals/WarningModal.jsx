import { Modal, Spin } from "antd";

const WarningModal = ({ open, onCancel, title, onOk, loading }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      centered
      footer={null}
      closable={false}
    >
      <Spin spinning={loading === true}>
        <div className="flex flex-col items-center">
          {title}
          <div className="flex gap-x-5 mt-[26px]">
            <button
              onClick={onCancel}
              className="warning-modal-btn border-1 border-black"
            >
              KHÔNG
            </button>
            <button
              onClick={onOk}
              className="warning-modal-btn bg-orange text-white hover:brightness-110"
            >
              CHẮC CHẮN
            </button>
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export default WarningModal;
