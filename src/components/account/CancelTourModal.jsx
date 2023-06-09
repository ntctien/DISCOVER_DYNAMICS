import React, { useState } from "react";
import WarningModal from "../modals/WarningModal";
import { message } from "antd";

const CancelTourModal = ({
  currItem,
  open,
  handleCancel,
  handleCancelTour,
}) => {
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    await handleCancelTour();
    setLoading(false);
    message.success("Hủy tour thành công");
  };

  return (
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
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      loading={loading}
    />
  );
};

export default CancelTourModal;
